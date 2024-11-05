import { IsString } from "class-validator";

export class CreateDocumentTypeDto{
    @IsString()
    name            :string
    description     ?:string;
    retentionPeriod ?:number;
    updatedById:number
}
