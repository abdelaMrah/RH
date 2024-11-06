import { Injectable, NotFoundException } from '@nestjs/common';
import { CreateAbsenceDto } from './dto/create-absence.dto';
import { UpdateAbsenceDto } from './dto/update-absence.dto';
import { PrismaService } from 'src/prisma/prisma.service';

@Injectable()
export class AbsencesService {
  constructor(private readonly prisma:PrismaService){}
  async create(createAbsenceDto: CreateAbsenceDto) {
    const absence = await this.prisma.absence.create({data:{...createAbsenceDto,date:new Date(createAbsenceDto.date).toISOString()}})
    return absence;
  }

  findAll(props:Record<string,any>={}) {
    return this.prisma.absence.findMany({where:props});
  }

  async findOne(id: number,props:Record<string,any>={}) {
    try {
      const absence = await this.prisma.absence.findUnique({where:{id,...props}})
      if(!absence) throw new NotFoundException();
      return absence;
    } catch (error) {
      throw error;
    }
  }

  async update(id: number, updateAbsenceDto: UpdateAbsenceDto) {
    try {
      const absence = await this.findOne(id);
      if(!absence) throw new NotFoundException();
      const updated = await this.prisma.absence.update({where:{id:absence.id},data:updateAbsenceDto})
      return updated;
    } catch (error) {
      throw error;
    }
  }

  async remove(id: number) {
    try {
      const absence = await this.findOne(id);
      if(!absence) throw new NotFoundException();
      await this.prisma.absence.delete({where:{id}})
    } catch (error) {
      throw error;
    }
  }
}
