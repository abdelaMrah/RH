import { IsNumber, IsString } from "class-validator";

export class AddCommentDto{
    @IsNumber()
    userId:number;
    @IsString()
    comment:string
}