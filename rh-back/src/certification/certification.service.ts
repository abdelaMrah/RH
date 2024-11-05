import { ConflictException, Injectable, NotFoundException } from '@nestjs/common';
import { CreateCertificationDto } from './dto/create-certification.dto';
import { UpdateCertificationDto } from './dto/update-certification.dto';
import { PrismaService } from 'src/prisma/prisma.service';

@Injectable()
export class CertificationService {
  constructor(private readonly prisma:PrismaService){}
  async create(createCertificationDto: CreateCertificationDto) {
    try {
      const certification = await this.prisma.certification.create({data:{
      
        ...createCertificationDto,
        issueDate:new Date(createCertificationDto.issueDate).toISOString(),
        expiryDate:new Date(createCertificationDto.expiryDate).toISOString()
      }})
      return certification;
    } catch (error) {
      throw error
    }
  }

  findAll() {
    return this.prisma.certification.findMany();
  }

  async findOne(id: number) {
    try {
      const certification = await this.prisma.certification.findUnique({where:{id}});
      if(!certification) throw new NotFoundException()
        return certification;
    } catch (error) {
      
    }
  }

  async update(id: number, updateCertificationDto: UpdateCertificationDto) {
    
      try {
        const certificationExist = await this.findOne(id);
        if(!certificationExist) throw new ConflictException({message:'this certification already exist'});
        const certification = await this.prisma.certification.update({
          where:{id},
          data:{
            ...updateCertificationDto,
            issueDate:new Date(updateCertificationDto.issueDate).toDateString(),
            expiryDate:new Date(updateCertificationDto.expiryDate)
        }})
        return certification;
      } catch (error) {
        throw error
      }
  }

 async remove(id: number) {
   return await this.prisma.certification.delete({where:{id}})
  }
}
