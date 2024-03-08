import { Injectable, NotFoundException } from '@nestjs/common';
import { CreateContactIconDto } from './dto/create-contact-icon.dto';
import { UpdateContactIconDto } from './dto/update-contact-icon.dto';
import { PrismaService } from 'prisma/prisma.service';
import { ContactIcon } from './entities/contact-icon.entity';
import { v2 as cloudinary } from 'cloudinary';
import { unlink } from 'fs';

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

  async upload(contactIcon: Express.Multer.File, contactIconId: string) {
    cloudinary.config({
      cloud_name: process.env.CLOUD_NAME,
      api_key: process.env.API_KEY,
      api_secret: process.env.API_SECRET,
    });

    const findContactIcon = await this.prisma.contactIcons.findFirst({
      where: { id: contactIconId },
    });

    if (!findContactIcon) {
      throw new NotFoundException('Contact Icon Not Found!');
    }

    const uploadContactIcon = await cloudinary.uploader.upload(
      contactIcon.path,
      {
        resource_type: 'image',
      },
      (error, result) => {
        return result;
      },
    );

    const updateContactIcon = await this.prisma.contactIcons.update({
      where: { id: contactIconId },
      data: {
        contactIcon: uploadContactIcon.secure_url,
      },
    });

    unlink(contactIcon.path, (error) => {
      if (error) console.log(error);
    });

    return updateContactIcon;
  }

  async remove(id: string): Promise<void> {
    const oneContactIcon = await this.prisma.contactIcons.findUnique({
      where: { id: id },
    });
    if (!oneContactIcon) throw new NotFoundException('Contact Icon Not Found');

    await this.prisma.contactIcons.delete({ where: { id } });
  }
}
