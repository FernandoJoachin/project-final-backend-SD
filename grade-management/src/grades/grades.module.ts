import { Module } from '@nestjs/common';
import { GradesService } from './grades.service';
import { GradesController } from './grades.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Subject } from 'src/subjects/entities/subject.entity';
import { Grade } from './entities/grade.entity';
import { Student } from 'src/students/entities/student.entity';
import { CommonModule } from 'src/common/common.module';
import { SubjectsService } from 'src/subjects/subjects.service';
import { StudentsService } from 'src/students/students.service';

@Module({
  controllers: [GradesController],
  providers: [GradesService, SubjectsService, StudentsService],
  imports: [
    TypeOrmModule.forFeature([ Student, Grade, Subject ]),
    CommonModule
  ],
  exports: [GradesService]
})
export class GradesModule {}
