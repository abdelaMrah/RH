import { Injectable, NotFoundException } from "@nestjs/common";
import { PrismaService } from "src/prisma/prisma.service";
import { CreateStepDto } from "./dto/create-step.dto";
import { UpdateStepDto } from "./dto/update-step.dto";

@Injectable()
export class StepService {
    constructor(private readonly prisma:PrismaService){}
    async create(createStepDto:CreateStepDto&{workflowId:number}){
        const step = await this.prisma.workflowStep.create({
            data:createStepDto,
        })
        return step;
    }

    async findAll(params:Record<string,any>={}){
        return this.prisma.workflowStep.findMany({where:params});
    }

    async findOne(id:number,params:Record<string,any>={}){
        try {
            const step = await this.prisma.workflowStep.findUnique({where:{id,...params}});
            if(!step) throw new NotFoundException();
            return step;
        } catch (error) {
            throw error
        }
    }
    async update(id: number, updateStepDto: UpdateStepDto&{workflowId:number}) {
        try {
          const step = await this.findOne(id);
          console.log({step})
          const updated = await this.prisma.workflowStep.update({where:{id:step.id,},data:updateStepDto})
          return updated;
        } catch (error) {
          throw error;
        }
      }

      async delete(id:number){
        try {
            await this.prisma.workflowStep.delete({where:{id}});
        } catch (error) {
            throw error
        }
      }
    
}