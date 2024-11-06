import { Module } from '@nestjs/common';
import { AbsencesService } from './absences.service';
import { AbsencesController } from './absences.controller';
import { PrismaService } from 'src/prisma/prisma.service';

@Module({
  controllers: [AbsencesController],
  providers: [AbsencesService,PrismaService],
})
export class AbsencesModule {}
