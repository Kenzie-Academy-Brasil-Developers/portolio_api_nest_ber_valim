import { Injectable, NotFoundException } from '@nestjs/common';
import { CreateTechDto } from './dto/create-tech.dto';
import { UpdateTechDto } from './dto/update-tech.dto';
import { PrismaService } from 'prisma/prisma.service';
import { Tech } from './entities/tech.entity';

@Injectable()
export class TechsService {
  constructor(private prisma: PrismaService) {}

  async create(createTechDto: CreateTechDto): Promise<Tech> {
    const newTechIcon = Object.assign(new Tech(), createTechDto);
    await this.prisma.tech.create({ data: { ...newTechIcon } });
    return newTechIcon;
  }

  async findAll(): Promise<Tech[]> {
    const techIcons = await this.prisma.tech.findMany();
    return techIcons;
  }

  async findOne(id: string): Promise<Tech> {
    const oneTechIcon = await this.prisma.tech.findUnique({
      where: { id: id },
    });
    if (!oneTechIcon) throw new NotFoundException('Tech Icon Not Found');

    return oneTechIcon;
  }

  async update(id: string, updateTechDto: UpdateTechDto): Promise<Tech> {
    const oneTech = await this.prisma.tech.findUnique({
      where: { id: id },
    });
    if (!oneTech) throw new NotFoundException('Tech Icon Not Found');

    const updatedTech = await this.prisma.tech.update({
      where: { id },
      data: { ...updateTechDto },
    });

    return updatedTech;
  }

  async remove(id: string): Promise<void> {
    const oneTechIcon = await this.prisma.tech.findUnique({
      where: { id: id },
    });
    if (!oneTechIcon) throw new NotFoundException('Tech Icon Not Found');

    await this.prisma.tech.delete({ where: { id } });
  }
}
