import { IsNumber, IsString } from "class-validator";
import { DocumentStatus } from "../enums/document-staus.enum";
import { CreateDocumentTypeDto } from "./create-document-type";

export class CreateDocumentDto {
    
    departmentId    ?:number;
    @IsNumber()
    documentTypeId  :number;
    version         ?:number;
    @IsString()
    filePath        :string;
    metadata        ?:object
    status          ?:DocumentStatus 
    expiryDate      ?:Date
}

