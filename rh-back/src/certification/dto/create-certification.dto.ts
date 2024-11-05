import { IsString } from "class-validator";

export class CreateCertificationDto {
    @IsString()
    name:string;
    @IsString()
    issueDate:Date;
    @IsString()
    issuedBy:string;
    expiryDate?:string
        
}
