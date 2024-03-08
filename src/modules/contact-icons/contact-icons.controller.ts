import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
  HttpCode,
  UseInterceptors,
  UploadedFiles,
} from '@nestjs/common';
import { ContactIconsService } from './contact-icons.service';
import { CreateContactIconDto } from './dto/create-contact-icon.dto';
import { UpdateContactIconDto } from './dto/update-contact-icon.dto';
import { FileFieldsInterceptor } from '@nestjs/platform-express';
import { ApiTags } from '@nestjs/swagger';

@ApiTags('contact-icons')
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

  @Patch(':id/upload')
  @UseInterceptors(
    FileFieldsInterceptor([{ name: 'contactIcon', maxCount: 1 }]),
  )
  upload(
    @Param('id') id: string,
    @UploadedFiles()
    files: {
      contactIcon: Express.Multer.File[];
    },
  ) {
    const { contactIcon } = files;
    return this.contactIconsService.upload(contactIcon[0], id);
  }

  @Patch(':id')
  update(
    @Param('id') id: string,
    @Body() updateContactIconDto: UpdateContactIconDto,
  ) {
    return this.contactIconsService.update(id, updateContactIconDto);
  }

  @HttpCode(204)
  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.contactIconsService.remove(id);
  }
}
