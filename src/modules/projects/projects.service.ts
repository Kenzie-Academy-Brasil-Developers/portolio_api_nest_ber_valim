import { Injectable, NotFoundException } from '@nestjs/common';
import { CreateProjectDto } from './dto/create-project.dto';
import { UpdateProjectDto } from './dto/update-project.dto';
import { PrismaService } from 'prisma/prisma.service';
import { Project } from './entities/project.entity';

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

  update(id: number, updateProjectDto: UpdateProjectDto) {
    return `This action updates a #${id} project`;
  }

  async remove(id: string): Promise<void> {
    const oneProject = await this.prisma.project.findUnique({
      where: { id: id },
    });
    if (!oneProject) throw new NotFoundException('Project Not Found');

    await this.prisma.project.delete({ where: { id: id } });
  }
}
