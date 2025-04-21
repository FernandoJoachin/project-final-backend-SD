import { Module } from '@nestjs/common';
import { StudentsService } from './students.service';
import { StudentsController } from './students.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Student } from './entities/student.entity';
import { Grade } from 'src/grades/entities/grade.entity';
import { CommonModule } from 'src/common/common.module';

@Module({
  controllers: [StudentsController],
  providers: [StudentsService],
  imports: [
    TypeOrmModule.forFeature([ Student, Grade ]),
    CommonModule
  ],
  exports: [StudentsService]
})
export class StudentsModule {}
