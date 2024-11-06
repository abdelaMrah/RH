import { IsIn,  IsNumber, IsString } from "class-validator";
import { AbsenceStatus } from "../entities/absence-status.enum";

export class CreateAbsenceDto {
    @IsString()
    date:Date;
    @IsNumber()
    absenceTypeId:number;
    @IsNumber()
    employeeId:number;
    @IsString()
    reason:string;
    // @IsIn([AbsenceStatus.JUSTIFIE,AbsenceStatus.UNJUSTIFIED,null])
    status?:AbsenceStatus;
}
