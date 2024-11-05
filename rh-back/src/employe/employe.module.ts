import { Module } from '@nestjs/common';
import { EmployeService } from './employe.service';
import { EmployeController } from './employe.controller';
import { PrismaService } from 'src/prisma/prisma.service';
import { Certification } from 'src/certification/entities/certification.entity';
import { CertificationService } from 'src/certification/certification.service';

@Module({
  controllers: [EmployeController],
  providers: [EmployeService,PrismaService,CertificationService],
})
export class EmployeModule {}
