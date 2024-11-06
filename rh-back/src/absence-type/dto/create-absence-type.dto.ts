import { IsString } from "class-validator";

export class CreateAbsenceTypeDto {
    @IsString()
    name:string;
    description?:string;
}
