import { Injectable, NotAcceptableException, NotFoundException } from "@nestjs/common";
import { PrismaService } from "src/prisma/prisma.service";
import { AddSignatureDocDto } from "./dto/add-signature.document";
import { EmployeService } from "src/employe/employe.service";

@Injectable()
export class SignatureServce{
constructor(private readonly prisma:PrismaService,private readonly employeService:EmployeService){}

async createSignature(docId:number,signatureDto:AddSignatureDocDto){
    try {
        const signatory = await this.employeService.findOne(signatureDto.signatoryId);
        if(!signatory) throw new NotAcceptableException({message:'signatory not found'});
        const signature = await this.prisma.documentSignature.create({
            data:{
                ...signatureDto,
                documentId:docId,
                signatoryId:signatory.id,
                signedAt:new Date(signatureDto.signedAt)
            }
        })
        return signature
    } catch (error) {
        throw error
    }
}
async getSignature(id:number){
    try {
        const signature = await this.prisma.documentSignature.findUnique({where:{id}})
        if(!signature) throw new NotFoundException({message:'signature not found'});
        return signature;
    } catch (error) {
        throw error
    }
}

async getSignatory(id:number){
    try {
        // const signature = await this.prisma.documentSignature
        // if(!signature) throw new NotFoundException({message:'signature not found'});
        // return signature;
    } catch (error) {
        throw error
    }
}
}