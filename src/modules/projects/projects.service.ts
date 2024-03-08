import { Injectable } from '@nestjs/common';
import { CreateProjectDto } from './dto/create-project.dto';
import { UpdateProjectDto } from './dto/update-project.dto';
import { PrismaService } from 'prisma/prisma.service';
import { Project } from './entities/project.entity';

@Injectable()
export class ProjectsService {
  constructor(private prisma: PrismaService) {}

  async create(createProjectDto: CreateProjectDto) {
    const newProject = Object.assign(new Project(), createProjectDto);
    await this.prisma.project.create({ data: { ...newProject } });
    return newProject;
  }

  async findAll() {
    const projects = await this.prisma.project.findMany();
    return projects;
  }

  findOne(id: number) {
    return `This action returns a #${id} project`;
  }

  update(id: number, updateProjectDto: UpdateProjectDto) {
    return `This action updates a #${id} project`;
  }

  remove(id: number) {
    return `This action removes a #${id} project`;
  }
}
