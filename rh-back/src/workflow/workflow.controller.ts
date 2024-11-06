import { Controller, Get, Post, Body, Patch, Param, Delete, ParseIntPipe } from '@nestjs/common';
import { WorkflowService } from './workflow.service';
import { CreateWorkflowDto } from './dto/create-workflow.dto';
import { UpdateWorkflowDto } from './dto/update-workflow.dto';
import { StepService } from './step.serveice';
import { UpdateStepDto } from './dto/update-step.dto';
import { CreateStepDto } from './dto/create-step.dto';

@Controller('workflow')
export class WorkflowController {
  constructor(private readonly workflowService: WorkflowService,private readonly stepService:StepService) {}

  @Post()
  create(@Body() createWorkflowDto: CreateWorkflowDto) {
    return this.workflowService.create(createWorkflowDto);
  }

  @Get()
  findAll() {
    return this.workflowService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.workflowService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateWorkflowDto: UpdateWorkflowDto) {
    return this.workflowService.update(+id, updateWorkflowDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.workflowService.remove(+id);
  }
  
  @Get('/:id/steps')
  getSteps(@Param('id',ParseIntPipe)id:number){
    return this.workflowService.getSteps(id);
  }
  @Get('/:id/steps/:stepId')
  getStep(@Param('id',ParseIntPipe)id:number,@Param('stepId',ParseIntPipe) stepId:number){
    return this.workflowService.getOneStep(id,stepId);
  }
  @Post('/:id/steps')
  createStep(@Param('id',ParseIntPipe)id:number,@Body() createStepDto:CreateStepDto){
    console.log({id,createStepDto})
    return this.workflowService.createStep(id,createStepDto);
  }

  @Patch('/:id/steps/:stepId')
  updateStep(@Param('id',ParseIntPipe)id:number,@Param('stepId',ParseIntPipe) stepId:number,@Body() updateStepDto:UpdateStepDto){
    console.log({id,stepId,updateStepDto})
    return this.workflowService.updateStep(id,stepId,updateStepDto);
  }
  @Delete('/:id/steps/:stepId')
  deleteStep(@Param('id',ParseIntPipe)id:number,@Param('stepId',ParseIntPipe) stepId:number){
    return this.workflowService.deleteStep(id,stepId);
  }
}
