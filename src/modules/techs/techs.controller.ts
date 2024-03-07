import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { TechsService } from './techs.service';
import { CreateTechDto } from './dto/create-tech.dto';
import { UpdateTechDto } from './dto/update-tech.dto';

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
    return this.techsService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateTechDto: UpdateTechDto) {
    return this.techsService.update(+id, updateTechDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.techsService.remove(+id);
  }
}
