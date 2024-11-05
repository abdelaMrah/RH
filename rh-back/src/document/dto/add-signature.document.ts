import { IsIn, IsNumber, IsString } from "class-validator";
import { SignatureStatus } from "../enums/signature.status.enum";

export class AddSignatureDocDto{
    @IsNumber()
    signatoryId:number;
    @IsIn([SignatureStatus.SENT,SignatureStatus.SIGNED,SignatureStatus.VIEWED])
    status:SignatureStatus;
    @IsString()
    signedAt:Date;
}