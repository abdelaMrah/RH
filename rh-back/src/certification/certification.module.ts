import { Module } from '@nestjs/common';
import { CertificationService } from './certification.service';
import { CertificationController } from './certification.controller';
import { PrismaService } from 'src/prisma/prisma.service';

@Module({
  controllers: [CertificationController],
  providers: [CertificationService,PrismaService],
})
export class CertificationModule {}
