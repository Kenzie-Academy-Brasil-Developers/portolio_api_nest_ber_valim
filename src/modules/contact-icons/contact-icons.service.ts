import { Injectable } from '@nestjs/common';
import { CreateContactIconDto } from './dto/create-contact-icon.dto';
import { UpdateContactIconDto } from './dto/update-contact-icon.dto';

@Injectable()
export class ContactIconsService {
  create(createContactIconDto: CreateContactIconDto) {
    return 'This action adds a new contactIcon';
  }

  findAll() {
    return `This action returns all contactIcons`;
  }

  findOne(id: number) {
    return `This action returns a #${id} contactIcon`;
  }

  update(id: number, updateContactIconDto: UpdateContactIconDto) {
    return `This action updates a #${id} contactIcon`;
  }

  remove(id: number) {
    return `This action removes a #${id} contactIcon`;
  }
}
