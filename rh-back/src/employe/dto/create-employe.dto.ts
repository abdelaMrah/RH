import { IsNotEmpty, IsNumber, IsString } from "class-validator";
import { EmployeeStatus } from "../enums/employee-status.enum";

export class CreateEmployeDto {
    @IsString()
    firstName   :string;
    @IsString()
    lastName    :string;
    @IsString()
    email       :string;
    @IsString()
    phoneNumber ?:string;
    @IsString()
    position    ?:string;
    departmentId ?:number;
    @IsNotEmpty()
    hireDate    :Date
    status      ?:EmployeeStatus
    
}
