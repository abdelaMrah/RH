import { Injectable, NotFoundException } from '@nestjs/common';
import { CreateDepartmentDto } from './dto/create-department.dto';
import { UpdateDepartmentDto } from './dto/update-department.dto';
import { PrismaService } from 'src/prisma/prisma.service';

@Injectable()
export class DepartmentService {
  constructor(private readonly prisma:PrismaService){}
  
  async create(createDepartmentDto: CreateDepartmentDto) {
    try {
      const department = await this.prisma.department.create({data:createDepartmentDto})
      if(!department) throw new Error()
      return department;
      
    } catch (error) {
      throw error
    } 
  
    }
  

  async findAll() {
    return await this.prisma.department.findMany();

  }

  async findOne(id: number) {
    try {
      const department = await this.prisma.department.findUnique({where:{id}})
      if(!department) throw new NotFoundException();
      return department
     } catch (error) {
      throw error
     }
  }

  async update(id: number, updateDepartmentDto: UpdateDepartmentDto) {
    try {
      const dep =await this.findOne(id);
      const department = await this.prisma.department.update({where:{id:dep.id},data:updateDepartmentDto})
      if(!department) throw new NotFoundException();
      return department
     } catch (error) {
      throw error
     }
  }

  async remove(id: number) {
    try {
      await this.prisma.department.delete({where:{id}})

   } catch (error) {
    throw error
   }
  }


 
}
