import { PartialType } from "@nestjs/mapped-types";
import { IsNumber, IsString } from "class-validator";
import { CreateDepartmentDto } from "src/department/dto/create-department.dto";

export class DocumentVersionDto extends PartialType(CreateDepartmentDto){

    @IsNumber()
    version:number;
    @IsString()
    filePath:string;
}