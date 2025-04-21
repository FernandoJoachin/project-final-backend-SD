import { Entity, PrimaryGeneratedColumn, Column, ManyToOne } from 'typeorm';
import { Student } from '../../students/entities/student.entity';
import { Subject } from '../../subjects/entities/subject.entity';
import { ApiProperty, ApiTags } from '@nestjs/swagger';

@ApiTags('Grades')
@Entity()
export class Grade {
  @ApiProperty({
    example: 'fa0bcbd3-8f72-4aa7-935e-32cefd0a291a',
    description: 'Automatically generated unique ID',
    format: 'uuid',
  })
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @ApiProperty({
    example: 85.5,
    description: 'Numerical grade score',
    type: 'number',
    format: 'decimal',
    minimum: 0,
    maximum: 100,
  })
  @Column({
    type: 'decimal',
    precision: 5,
    scale: 2,
    transformer: {
      to: (value: number) => value, 
      from: (value: string) => parseFloat(value)
    },
  })
  score: number;

  @ApiProperty({
    example: '2023-05-15',
    description: 'Date when the grade was recorded',
    type: 'string',
    format: 'date',
  })
  @Column()
  date: Date;

  @ApiProperty({
    type: () => Student,
    description: 'Student associated with this grade',
  })
  @ManyToOne(() => Student, (student) => student.grades)
  student: Student;

  @ApiProperty({
    type: () => Subject,
    description: 'Subject associated with this grade',
  })
  @ManyToOne(() => Subject, (subject) => subject.grades)
  subject: Subject;
}