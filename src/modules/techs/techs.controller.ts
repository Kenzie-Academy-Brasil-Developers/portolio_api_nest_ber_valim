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
import { TechsService } from './techs.service';
import { CreateTechDto } from './dto/create-tech.dto';
import { UpdateTechDto } from './dto/update-tech.dto';
import { FileFieldsInterceptor } from '@nestjs/platform-express';

@Controller('techs')
export class TechsController {
  constructor(private readonly techsService: TechsService) {}

  @Post()
  create(@Body() createTechDto: CreateTechDto) {
    return this.techsService.create(createTechDto);
  }

  @Get()
  findAll() {
    return this.techsService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.techsService.findOne(id);
  }

  @Patch(':id/upload')
  @UseInterceptors(FileFieldsInterceptor([{ name: 'techIcon', maxCount: 1 }]))
  upload(
    @Param('id') id: string,
    @UploadedFiles()
    files: {
      techIcon: Express.Multer.File[];
    },
  ) {
    const { techIcon } = files;
    return this.techsService.upload(techIcon[0], id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateTechDto: UpdateTechDto) {
    return this.techsService.update(id, updateTechDto);
  }

  @HttpCode(204)
  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.techsService.remove(id);
  }
}
