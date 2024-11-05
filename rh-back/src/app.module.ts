import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { PrismaModule } from './prisma/prisma.module';
import { EmployeModule } from './employe/employe.module';
import { DepartmentModule } from './department/department.module';
import { DocumentModule } from './document/document.module';
import { CertificationModule } from './certification/certification.module';

@Module({
  imports: [ConfigModule.forRoot({isGlobal:true}),PrismaModule, EmployeModule, DepartmentModule, DocumentModule, CertificationModule],
  
})
export class AppModule {}
