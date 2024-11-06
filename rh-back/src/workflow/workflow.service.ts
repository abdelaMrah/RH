import { Injectable, InternalServerErrorException, NotFoundException } from '@nestjs/common';
import { CreateWorkflowDto } from './dto/create-workflow.dto';
import { UpdateWorkflowDto } from './dto/update-workflow.dto';
import { PrismaService } from 'src/prisma/prisma.service';
import { StepService } from './step.serveice';
import { CreateStepDto } from './dto/create-step.dto';
import { UpdateStepDto } from './dto/update-step.dto';

@Injectable()
export class WorkflowService {
  constructor(private readonly prisma:PrismaService,private readonly stepService:StepService){}
  async create(createWorkflowDto: CreateWorkflowDto) {
    const workflow = await this.prisma.workflow.create({data:createWorkflowDto})
    return workflow
  }

  async findAll() {
    return await this.prisma.workflow.findMany()
  }

 async findOne(id: number) {
    try {
      const workflow = await this.prisma.workflow.findUnique({where:{id}})
      if(!workflow) throw new NotFoundException();
      return workflow
    } catch (error) {
      throw error;
    }
  }

  async update(id: number, updateWorkflowDto: UpdateWorkflowDto) {
    try {
      const workflow = await this.findOne(id);
      const updated = await this.prisma.workflow.update({where:{id:workflow.id},data:updateWorkflowDto})
      return updated;
    } catch (error) {
      throw error;
    }
  }

  async remove(id: number) {
    try {
      const workflow = await this.findOne(id);
      await this.prisma.workflow.delete({where:{id:workflow.id}})
     } catch (error) {
      throw error;
    }
  }
  async getSteps(id:number){
    try {
      const steps = await this.stepService.findAll({workflowId:id});
      return steps;
    } catch (error) {
      
    }
  }
  async getOneStep(id:number,stepId:number){
    try {
      const step = await this.stepService.findOne(stepId,{workflowId:id});
      return step;
    } catch (error) {
      throw error; 
    }      
  }
  async createStep(id:number,createStepDto:CreateStepDto){
    try {
      const step = await this.stepService.create({...createStepDto,workflowId:id})
      if(!step) throw new InternalServerErrorException();
      return step;
    } catch (error) {
      throw error;  
    }
  }
  async updateStep(id:number,stepId:number,updateStepDto:UpdateStepDto){
    try {
      const workflow = await this.findOne(id);
      if(!workflow) throw new NotFoundException();
      const step = await this.stepService.update(stepId,{...updateStepDto,workflowId:id})
      return step
    } catch (error) {
      throw error;
    }
  }
  async deleteStep(id:number,stepId:number){
    try {
      const workflow = await this.findOne(id);
      if(!workflow) throw new NotFoundException();
      this.stepService.delete(stepId);
    } catch (error) {
      
    }
  }
}
