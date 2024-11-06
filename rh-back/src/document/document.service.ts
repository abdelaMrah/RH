import { ConflictException, Injectable, InternalServerErrorException, NotFoundException } from '@nestjs/common';
import { CreateDocumentDto } from './dto/create-document.dto';
import { PrismaService } from 'src/prisma/prisma.service';
 import { UpdateDocumentDto } from './dto/update-document.dto';
import { AddSignatureDocDto } from './dto/add-signature.document';
import { SignatureServce } from './signature.service';
import { DocumentVersionDto } from './dto/create-document-version';
import { AddCommentDto } from './dto/add-comment.documement.dto';

@Injectable()
export class DocumentService {
  constructor(private readonly prisma: PrismaService,private readonly signatureService:SignatureServce) {}

  async create(createDocumentDto: CreateDocumentDto) {
    try {
      const document = await this.prisma.document.create({
        data: createDocumentDto
      });
      if (!document) throw new Error();
      return document;
    } catch (error) {
      throw error;
    }
  }

  async findAll() {
    return await this.prisma.document.findMany();
  }

  async findOne(id: number) {
    try {
      const document = await this.prisma.document.findUnique({ where: { id } });
      if (!document) throw new NotFoundException();
      return document;
    } catch (error) {
      throw error;
    }
  }

  async update(id: number, updateDocumentDto: UpdateDocumentDto) {
    try {
      const dep = await this.findOne(id);
      const document = await this.prisma.document.update({
        where: { id: dep.id },
        data: updateDocumentDto,
      });
      if (!document) throw new NotFoundException();
      return document;
    } catch (error) {
      throw error;
    }
  }

  async remove(id: number) {
    try {
      await this.prisma.document.delete({ where: { id } });
    } catch (error) {
      throw error;
    }
  }

  async addSignatureToDocument(id:number,signatureDto:AddSignatureDocDto){
    try {
      const docExist = await this.findOne(id);
      console.log({docExist})
      if(!docExist) throw new NotFoundException({message:'document not found'})
     const signature =await this.signatureService.createSignature(docExist.id,signatureDto)
      if(!signature)throw new InternalServerErrorException();
      return signature;
      
    } catch (error) {
      throw error
    }
  }

  async getDocumentVersions(id:number){
    const versions = await this.prisma.document.findUnique({where:{id}}).Versions()
    return versions;
  }
  async createDocumentVersion (documentVersionDto:DocumentVersionDto&{documentId:number}){
   try {
    const documenet = await this.findOne(documentVersionDto.documentId);
    if(!documenet) throw new NotFoundException({message:'document not found'})
    const docVervionExist =await this.prisma.documentVersion.findFirstOrThrow({
    where:{version:documentVersionDto.version}});
    console.log({docVervionExist})
    if(docVervionExist) throw new ConflictException({message:'this version of documenet already exist'})
    const documentVersion = await this.prisma.documentVersion.create({
      data:{
        ...documentVersionDto,
        
      }
    })
    return documentVersion
   } catch (error) {
    throw error
   }
  }

  async addComment(createComment:{  documentId:number;userId:number;comment:string}){
    try {
      const comment = await this.prisma.documentComment.create({
        data:createComment
      })
      return comment
    } catch (error) {
      throw error
    }
  }

  async getTags(id:number){
    try {
      
      const tags = await this.prisma.document.findUnique({where:{id}}).Tags();
    return tags
    } catch (error) {
      throw error
    }
  }


  

  async addTagToDocument({documentId,name}:{documentId:number,name:string}){
    try {

      const docTag  =await this.prisma.documentTag.upsert({
       where:{name},
       create:{name},
       update:{}
      })

     await this.prisma.documentTagAssignment.create({
        data:{
          documentId:documentId,
          tagId:docTag.id
        }
      })
      
    } catch (error) {
      throw error; 
    }
  }
}
