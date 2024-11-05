import { Controller, Get, Post, Body, Patch, Param, Delete, ParseIntPipe } from '@nestjs/common';
import { EmployeService } from './employe.service';
import { CreateEmployeDto } from './dto/create-employe.dto';
import { UpdateEmployeDto, UpdateStatusEmployeDto } from './dto/update-employe.dto';

@Controller('employe')
export class EmployeController {
  constructor(private readonly employeService: EmployeService) {}

  @Post()
  create(@Body() createEmployeDto: CreateEmployeDto) {
    return this.employeService.create(createEmployeDto);
  }

  @Get()
  findAll() {
    return this.employeService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.employeService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateEmployeDto: UpdateEmployeDto) {
    return this.employeService.update(+id, updateEmployeDto);
  }
  @Patch(':id/status')
  updateStatus(@Param('id') id: string, @Body() updateEmployeDto: UpdateStatusEmployeDto) {
    return this.employeService.update(+id, updateEmployeDto);
  }
  @Delete(':id')
  remove(@Param('id') id: string,) {
    return this.employeService.remove(+id);
  }
  @Get(':id/documents')
  getDocuments(@Param('id',ParseIntPipe) id:number){
    return this.employeService.getDocumentsByUser(id);
  }
  @Get(':id/absences')
  getAbsence(@Param('id',ParseIntPipe) id:number){
    return this.employeService.getDocumentsByUser(id);
  }
  @Get(':id/projects')
  getProjects(@Param('id',ParseIntPipe) id:number){
    return this.employeService.getDocumentsByUser(id);
  }
  @Get(':id/reveiws')
  getReveiws(@Param('id',ParseIntPipe) id:number){
    return this.employeService.getDocumentsByUser(id);
  }
  @Get(':id/notifications')
  getNotifications(@Param('id',ParseIntPipe) id:number){
    return this.employeService.getDocumentsByUser(id);
  }
  @Get(':id/feedback')
  getFeedback(@Param('id',ParseIntPipe) id:number){
    return this.employeService.getDocumentsByUser(id);
  }
  @Get(':id/certifications')
  getCertifications(@Param('id',ParseIntPipe) id:number){
    return this.employeService.getDocumentsByUser(id);
  }

}
