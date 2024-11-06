import { Injectable } from '@nestjs/common';
import { CreateLeafDto } from './dto/create-leaf.dto';
import { UpdateLeafDto } from './dto/update-leaf.dto';
import { PrismaService } from 'src/prisma/prisma.service';

@Injectable()
export class LeavesService {
  constructor(private readonly prisma:PrismaService){}
  async create(createLeafDto: CreateLeafDto) {
    // const leave = await this.prisma.leave.create({data:{
      
    // }})
  }

  findAll() {
    return `This action returns all leaves`;
  }

  findOne(id: number) {
    return `This action returns a #${id} leaf`;
  }

  update(id: number, updateLeafDto: UpdateLeafDto) {
    return `This action updates a #${id} leaf`;
  }

  remove(id: number) {
    return `This action removes a #${id} leaf`;
  }
}
