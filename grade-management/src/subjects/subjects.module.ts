import { Module } from '@nestjs/common';
import { SubjectsService } from './subjects.service';
import { SubjectsController } from './subjects.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Subject } from './entities/subject.entity';
import { Grade } from 'src/grades/entities/grade.entity';
import { CommonModule } from 'src/common/common.module';

@Module({
  controllers: [SubjectsController],
  providers: [SubjectsService],
  imports: [
    TypeOrmModule.forFeature([ Subject, Grade ]),
    CommonModule
  ],
  exports: [SubjectsService]
})
export class SubjectsModule {}
