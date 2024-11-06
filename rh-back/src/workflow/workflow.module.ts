import { Module } from '@nestjs/common';
import { WorkflowService } from './workflow.service';
import { WorkflowController } from './workflow.controller';
import { PrismaService } from 'src/prisma/prisma.service';
import { StepService } from './step.serveice';

@Module({
  controllers: [WorkflowController],
  providers: [WorkflowService,PrismaService,StepService],
})
export class WorkflowModule {}
