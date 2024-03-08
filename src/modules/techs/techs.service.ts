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

  update(id: number, updateTechDto: UpdateTechDto) {
    return `This action updates a #${id} tech`;
  }

  async remove(id: string): Promise<void> {
    const oneTechIcon = await this.prisma.tech.findUnique({
      where: { id: id },
    });
    if (!oneTechIcon) throw new NotFoundException('Tech Icon Not Found');

    await this.prisma.tech.delete({ where: { id } });
  }
}
