import { PartialType } from '@nestjs/mapped-types';
import { CreateEmployeDto } from './create-employe.dto';
import { EmployeeStatus } from '../enums/employee-status.enum';
import { IsIn } from 'class-validator';

export class UpdateEmployeDto extends PartialType(CreateEmployeDto) {}

export class UpdateStatusEmployeDto{
    @IsIn([EmployeeStatus.ACTIVE,EmployeeStatus.INACTIVE])
    status?: EmployeeStatus;
}