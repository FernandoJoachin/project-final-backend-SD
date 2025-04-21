import { Entity, PrimaryGeneratedColumn, Column, OneToMany } from 'typeorm';
import { Grade } from '../../grades/entities/grade.entity';
import { ApiProperty, ApiTags } from '@nestjs/swagger';

@ApiTags('Subjects')
@Entity()
export class Subject {
  @ApiProperty({
    example: '2f77315a-92a8-44e6-bbd0-7e0396255ebf',
    description: 'Automatically generated unique ID',
    format: 'uuid',
  })
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @ApiProperty({
    example: 'Mathematics',
    description: 'Name of the subject',
    uniqueItems: true,
  })
  @Column({ unique: true })
  name: string;

  @ApiProperty({
    example: 9,
    description: 'Grade level this subject belongs to',
    minimum: 1,
    maximum: 9,
  })
  @Column()
  gradeLevel: number;

  @OneToMany(() => Grade, (grade) => grade.subject)
  grades: Grade[];
}