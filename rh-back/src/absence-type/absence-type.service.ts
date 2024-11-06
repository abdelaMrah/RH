import { Injectable, NotFoundException } from '@nestjs/common';
import { CreateAbsenceTypeDto } from './dto/create-absence-type.dto';
import { UpdateAbsenceTypeDto } from './dto/update-absence-type.dto';
import { PrismaService } from 'src/prisma/prisma.service';

@Injectable()
export class AbsenceTypeService {
  constructor(private readonly prisma:PrismaService){}
  async create(createAbsenceTypeDto: CreateAbsenceTypeDto) {
    return this.prisma.absenceType.create({data:createAbsenceTypeDto})
  }

  findAll() {
    return this.prisma.absenceType.findMany();
  }

  async findOne(id: number) {
    try {
        const absenceType =await this.prisma.absenceType.findUnique({where:{id}})
        if(!absenceType) throw new NotFoundException();
        return absenceType;
    } catch (error) {
      throw error
    }
  }

  async update(id: number, updateAbsenceTypeDto: UpdateAbsenceTypeDto) {
    try {
      const absenceType =await this.findOne(id)
      if(!absenceType) throw new NotFoundException();
      const updated =await this.prisma.absenceType.update({where:{id},data:updateAbsenceTypeDto})
      return updated;
  } catch (error) {
    throw error
  }
  }

 async remove(id: number) {
    try {
      const absenceType =await this.findOne(id)
      if(!absenceType) throw new NotFoundException();
      await this.prisma.absenceType.delete({where:{id}})
  } catch (error) {
    throw error
  }
  }
}
