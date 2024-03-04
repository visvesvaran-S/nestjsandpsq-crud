import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { VisvaService } from './visva.service';
import { CreateVisvaDto } from './dto/create-visva.dto';
import { UpdateVisvaDto } from './dto/update-visva.dto';

@Controller('form')
export class VisvaController {
  constructor(private readonly visvaService: VisvaService) {}

  @Post()
  create(@Body() createVisvaDto: CreateVisvaDto) {
    return this.visvaService.create(createVisvaDto);
  }

  @Get()
  findAll() {
    return this.visvaService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.visvaService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateVisvaDto: UpdateVisvaDto) {
    return this.visvaService.update(+id, updateVisvaDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.visvaService.remove(+id);
  }
}



