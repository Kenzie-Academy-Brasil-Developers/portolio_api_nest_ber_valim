import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
  HttpCode,
} from '@nestjs/common';
import { ContactIconsService } from './contact-icons.service';
import { CreateContactIconDto } from './dto/create-contact-icon.dto';
import { UpdateContactIconDto } from './dto/update-contact-icon.dto';

@Controller('contact-icons')
export class ContactIconsController {
  constructor(private readonly contactIconsService: ContactIconsService) {}

  @Post()
  create(@Body() createContactIconDto: CreateContactIconDto) {
    return this.contactIconsService.create(createContactIconDto);
  }

  @Get()
  findAll() {
    return this.contactIconsService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.contactIconsService.findOne(id);
  }

  @Patch(':id')
  update(
    @Param('id') id: string,
    @Body() updateContactIconDto: UpdateContactIconDto,
  ) {
    return this.contactIconsService.update(+id, updateContactIconDto);
  }

  @HttpCode(204)
  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.contactIconsService.remove(id);
  }
}
