import { Module } from '@nestjs/common';
import { AbsenceTypeService } from './absence-type.service';
import { AbsenceTypeController } from './absence-type.controller';
import { PrismaService } from 'src/prisma/prisma.service';

@Module({
  controllers: [AbsenceTypeController],
  providers: [AbsenceTypeService,PrismaService],
})
export class AbsenceTypeModule {}
