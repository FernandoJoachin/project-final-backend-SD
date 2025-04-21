import { Entity, PrimaryGeneratedColumn, Column, OneToMany } from 'typeorm';
import { Grade } from '../../grades/entities/grade.entity';
import { ApiProperty, ApiTags } from '@nestjs/swagger';

@ApiTags('Students') // Groups all Student-related endpoints
@Entity()
export class Student {
  @ApiProperty({
    example: '4fcb81a9-4e28-4eca-a5e8-89adab407a30',
    description: 'Automatically generated unique ID',
    format: 'uuid',
  })
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @ApiProperty({
    example: 'A01234567',
    description: 'Unique student identification number',
    uniqueItems: true,
  })
  @Column({ unique: true })
  studentId: string;

  @ApiProperty({
    example: 'John Doe',
    description: 'Full name of the student',
  })
  @Column()
  name: string;

  @ApiProperty({
    example: 9,
    description: 'Current grade level of the student',
    minimum: 1,
    maximum: 9,
  })
  @Column()
  gradeLevel: number;

  @ApiProperty({
    example: 'john.doe@school.edu',
    description: 'Student email address',
    uniqueItems: true,
  })
  @Column({ unique: true })
  email: string;

  @OneToMany(() => Grade, (grade) => grade.student)
  grades: Grade[];
}