import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { AbsenceTypeService } from './absence-type.service';
import { CreateAbsenceTypeDto } from './dto/create-absence-type.dto';
import { UpdateAbsenceTypeDto } from './dto/update-absence-type.dto';

@Controller('absence-type')
export class AbsenceTypeController {
  constructor(private readonly absenceTypeService: AbsenceTypeService) {}

  @Post()
  create(@Body() createAbsenceTypeDto: CreateAbsenceTypeDto) {
    return this.absenceTypeService.create(createAbsenceTypeDto);
  }

  @Get()
  findAll() {
    return this.absenceTypeService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.absenceTypeService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateAbsenceTypeDto: UpdateAbsenceTypeDto) {
    return this.absenceTypeService.update(+id, updateAbsenceTypeDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.absenceTypeService.remove(+id);
  }
}
