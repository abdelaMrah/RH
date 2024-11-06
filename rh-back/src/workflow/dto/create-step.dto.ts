import { IsNumber, IsString } from "class-validator";

export class CreateStepDto{
    // workflowId:number;
    @IsString()
    actionRequired:string;
    @IsNumber()
    assignedRoleId:number;
    @IsNumber()
    stepOrder:number;
    dueDate?:Date
}