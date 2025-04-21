import { Module } from '@nestjs/common';
import { ReportsService } from './reports.service';
import { ReportsController } from './reports.controller';
import { GradesService } from 'src/grades/grades.service';
import { SubjectsService } from 'src/subjects/subjects.service';
import { StudentsService } from 'src/students/students.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Student } from 'src/students/entities/student.entity';
import { Grade } from 'src/grades/entities/grade.entity';
import { Subject } from 'src/subjects/entities/subject.entity';
import { CommonModule } from 'src/common/common.module';

@Module({
  controllers: [ReportsController],
  providers: [ReportsService, GradesService, SubjectsService, StudentsService],
  imports: [
    TypeOrmModule.forFeature([ Student, Grade, Subject ]),
    CommonModule
  ],
})
export class ReportsModule {}
