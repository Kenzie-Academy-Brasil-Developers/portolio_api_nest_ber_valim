import { Injectable, NotFoundException } from '@nestjs/common';
import { CreateContactIconDto } from './dto/create-contact-icon.dto';
import { UpdateContactIconDto } from './dto/update-contact-icon.dto';
import { PrismaService } from 'prisma/prisma.service';
import { ContactIcon } from './entities/contact-icon.entity';

@Injectable()
export class ContactIconsService {
  constructor(private prisma: PrismaService) {}

  async create(
    createContactIconDto: CreateContactIconDto,
  ): Promise<ContactIcon> {
    const newContactIcon = Object.assign(
      new ContactIcon(),
      createContactIconDto,
    );
    await this.prisma.contactIcons.create({ data: { ...newContactIcon } });
    return newContactIcon;
  }

  async findAll(): Promise<ContactIcon[]> {
    const contactIcons = await this.prisma.contactIcons.findMany();
    return contactIcons;
  }

  async findOne(id: string): Promise<ContactIcon> {
    const oneContactIcon = await this.prisma.contactIcons.findUnique({
      where: { id: id },
    });
    if (!oneContactIcon) throw new NotFoundException('Contact Icon Not Found');

    return oneContactIcon;
  }

  async update(id: string, updateContactIconDto: UpdateContactIconDto) {
    const oneContact = await this.prisma.contactIcons.findUnique({
      where: { id: id },
    });
    if (!oneContact) throw new NotFoundException('Contact Icon Not Found');

    const updatedContactIcon = await this.prisma.contactIcons.update({
      where: { id },
      data: { ...updateContactIconDto },
    });

    return updatedContactIcon;
  }

  async remove(id: string): Promise<void> {
    const oneContactIcon = await this.prisma.contactIcons.findUnique({
      where: { id: id },
    });
    if (!oneContactIcon) throw new NotFoundException('Contact Icon Not Found');

    await this.prisma.contactIcons.delete({ where: { id } });
  }
}
