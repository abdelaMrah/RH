import { Injectable, NotFoundException } from '@nestjs/common';
import { CreateEmployeDto } from './dto/create-employe.dto';
import { UpdateEmployeDto } from './dto/update-employe.dto';
import { PrismaService } from 'src/prisma/prisma.service';
import {  Project } from '@prisma/client';
import { CertificationService } from 'src/certification/certification.service';
import { Certification } from 'src/certification/entities/certification.entity';

@Injectable()
export class EmployeService {
  constructor(private readonly prisma:PrismaService,private readonly certificationService:CertificationService){}
  async create(createEmployeDto: CreateEmployeDto) {
  try {
    const employee = await this.prisma.employee.create({data:createEmployeDto})
    if(!employee) throw new Error()
    return employee;
    
  } catch (error) {
    throw error
  } 

  }

  findAll() {
    return this.prisma.employee.findMany();
  }

  async findOne(id:number) {
   try {
    const employee = await this.prisma.employee.findUnique({where:{id}})
    if(!employee) throw new NotFoundException();
    return employee
   } catch (error) {
    throw error
   }
  }

 async update(id: number, updateEmployeDto: UpdateEmployeDto) {
    try {
      const employee = await this.prisma.employee.update({where:{id},data:updateEmployeDto})
      if(!employee) throw new NotFoundException();
      return employee
     } catch (error) {
      throw error
     }
  }

  async remove(id: number) {
    try {
        await this.prisma.employee.delete({where:{id}})
 
     } catch (error) {
      throw error
     }
  }

  async getDocumentsByUser(id:number){
    try {
      const documents = await this.prisma.employee.findUnique({where:{id}}).Documents();
      return documents;
    } catch (error) {
      throw error
    }
  }
  async getAbsenceByUser(id:number){
    try {
      const absences = await this.prisma.employee.findUnique({where:{id}}).Absences();
      return absences;
    } catch (error) {
      throw error
    }
  }
  async getLeavesByUser(id:number){
    try {
      const leaves = await this.prisma.employee.findUnique({where:{id}}).Leaves();
      return leaves;
    } catch (error) {
      throw error
    }
  }
  async getProjectsByUser(id:number){
    try {
      // const projects = await this.prisma.employee.findUnique({where:{id},include:{
      //   projectAssignment:{
      //     select:{
      //       project:true
      //     }
      //   }
      // }})
      const projects = await this.prisma.$queryRaw`
      SELECT 
          p.id AS projectId,
          p.name AS project_name
      FROM 
          Project p
      JOIN 
          ProjectAssignment pa ON p.id = pa.project_id
      JOIN 
          Employee e ON pa.employee_id = e.id
      GROUP BY 
          p.id, p.name;

      ` as  Project[]
      return projects;
    } catch (error) {
      throw error
    }
  }

  async getReviewsByUser (id:number){
    try {
      const reviews = await this.prisma.employee.findUnique({where:{id}}).performanceReview();
      return reviews;
    } catch (error) {
      throw error
    }
  }
  async getNotificationsByUser (id:number){
    try {
      const notification = await this.prisma.employee.findUnique({where:{id}}).notification();
      return notification;
    } catch (error) {
      throw error
    }
  }
  async getFeedbackByUser (id:number){
    try {
      const feedback = await this.prisma.employee.findUnique({where:{id}}).feedback();
      return feedback;
    } catch (error) {
      throw error
    }
  }
  async getCertificationsByUser (id:number){
    try {
      const certifications = await this.prisma.employee.findUnique({where:{id}}).employeeCertification();
      return certifications;
    } catch (error) {
      throw error
    }
  }
  async assignCertifications(userId:number,certificationId:number){
    try {
      
      const certification =await this.certificationService.findOne(certificationId);
      if(!certification)throw new NotFoundException({message:'certification not found'});
      const employe = await this.prisma.employee.update({

        where:{id:userId},
        data:{
          employeeCertification:{
            connect:{
              id:certification.id
            }
          }
        }
      })
      return employe;
    } catch (error) {
      throw error
    }
  }

}
