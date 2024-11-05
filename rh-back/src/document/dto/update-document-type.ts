import { PartialType } from "@nestjs/mapped-types";
import { CreateDocumentTypeDto } from "./create-document-type";

export class UpdateDocumentTypeDto extends PartialType(CreateDocumentTypeDto){}