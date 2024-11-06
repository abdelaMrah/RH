import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { PrismaModule } from './prisma/prisma.module';
import { EmployeModule } from './employe/employe.module';
import { DepartmentModule } from './department/department.module';
import { DocumentModule } from './document/document.module';
import { CertificationModule } from './certification/certification.module';
import { WorkflowModule } from './workflow/workflow.module';
import { AbsencesModule } from './absences/absences.module';
import { LeavesModule } from './leaves/leaves.module';
import { TrainingsModule } from './trainings/trainings.module';
import { NotificationsModule } from './notifications/notifications.module';
import { ProjectsModule } from './projects/projects.module';
import { FileStorageModule } from './file-storage/file-storage.module';
import { FeedbackModule } from './feedback/feedback.module';
import { RolesModule } from './roles/roles.module';
import { PermissionsModule } from './permissions/permissions.module';
import { AuthModule } from './auth/auth.module';
import { AbsenceTypeModule } from './absence-type/absence-type.module';

@Module({
  imports: [ConfigModule.forRoot({isGlobal:true}),PrismaModule, EmployeModule, DepartmentModule, DocumentModule, CertificationModule, WorkflowModule, AbsencesModule, LeavesModule, TrainingsModule, NotificationsModule, ProjectsModule, FileStorageModule, FeedbackModule, RolesModule, PermissionsModule, AuthModule, AbsenceTypeModule],
  
})
export class AppModule {}
