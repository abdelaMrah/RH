import { Module } from '@nestjs/common';
import { DocumentService } from './document.service';
import { DocumentController } from './document.controller';
import { PrismaService } from 'src/prisma/prisma.service';
import {  DocumentTypeService } from './document-type.service';
import { SignatureServce } from './signature.service';
import { EmployeService } from 'src/employe/employe.service';
import { CertificationService } from 'src/certification/certification.service';

@Module({
  controllers: [DocumentController],
  providers: [DocumentService,PrismaService,DocumentTypeService,SignatureServce,EmployeService,CertificationService],
})
export class DocumentModule {}
