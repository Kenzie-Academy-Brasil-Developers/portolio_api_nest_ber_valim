import { Injectable, NotFoundException } from '@nestjs/common';
import { CreateProjectDto } from './dto/create-project.dto';
import { UpdateProjectDto } from './dto/update-project.dto';
import { PrismaService } from 'prisma/prisma.service';
import { Project } from './entities/project.entity';
import { v2 as cloudinary } from 'cloudinary';
import { unlink } from 'fs';

@Injectable()
export class ProjectsService {
  constructor(private prisma: PrismaService) {}

  async create(createProjectDto: CreateProjectDto): Promise<Project> {
    const newProject = Object.assign(new Project(), createProjectDto);
    await this.prisma.project.create({ data: { ...newProject } });
    return newProject;
  }

  async findAll(): Promise<Project[]> {
    const projects = await this.prisma.project.findMany();
    return projects;
  }

  async findOne(id: string): Promise<Project> {
    const oneProject = await this.prisma.project.findUnique({
      where: { id: id },
    });
    if (!oneProject) throw new NotFoundException('Project Not Found');

    return oneProject;
  }

  async update(
    id: string,
    updateProjectDto: UpdateProjectDto,
  ): Promise<Project> {
    const oneProject = await this.prisma.project.findUnique({
      where: { id: id },
    });
    if (!oneProject) throw new NotFoundException('Project Not Found');

    const updatedProject = await this.prisma.project.update({
      where: { id },
      data: { ...updateProjectDto },
    });

    return updatedProject;
  }

  async upload(projectImage: Express.Multer.File, projectImageId: string) {
    cloudinary.config({
      cloud_name: process.env.CLOUD_NAME,
      api_key: process.env.API_KEY,
      api_secret: process.env.API_SECRET,
    });

    const findProjectImage = await this.prisma.project.findFirst({
      where: { id: projectImageId },
    });

    if (!findProjectImage) {
      throw new NotFoundException('Project Image Not Found!');
    }

    const uploadProjectImage = await cloudinary.uploader.upload(
      projectImage.path,
      {
        resource_type: 'image',
      },
      (error, result) => {
        return result;
      },
    );

    const updateProject = await this.prisma.project.update({
      where: { id: projectImageId },
      data: {
        projectImage: uploadProjectImage.secure_url,
      },
    });

    unlink(projectImage.path, (error) => {
      if (error) console.log(error);
    });

    return updateProject;
  }

  async remove(id: string): Promise<void> {
    const oneProject = await this.prisma.project.findUnique({
      where: { id: id },
    });
    if (!oneProject) throw new NotFoundException('Project Not Found');

    await this.prisma.project.delete({ where: { id: id } });
  }
}
