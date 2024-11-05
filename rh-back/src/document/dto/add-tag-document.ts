import { IsString } from "class-validator";

export class AddTagDocumentDto{
    @IsString()
    name:string;
}