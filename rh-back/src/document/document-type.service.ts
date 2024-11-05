import { Injectable, InternalServerErrorException, NotFoundException } from "@nestjs/common";
import { PrismaService } from "src/prisma/prisma.service";
import { CreateDocumentTypeDto } from "./dto/create-document-type";

@Injectable()
export class DocumentTypeService{
    constructor(private readonly prisma:PrismaService){}
    async create(createDocumentType:CreateDocumentTypeDto){
        try {
            const documentType = await this.prisma.documentType.create({data:createDocumentType})
            if(!documentType) throw new InternalServerErrorException()
            return documentType;
            
          } catch (error) {
            throw error
          } 
    }
    async getDocumentTypes(){
        return await this.prisma.documentType.findMany();
    }
    async getDocumentType(id:number){
        try {
            const documentType= await this.prisma.documentType.findUnique({where:{id}})
            if(!documentType) throw new NotFoundException();
            return documentType
           } catch (error) {
            throw error
           }
    }


    async removeDocumentType(id:number){
        try {
                await this.prisma.documentType.delete({where:{id}})
           } catch (error) {
                throw error
           }
    }
}