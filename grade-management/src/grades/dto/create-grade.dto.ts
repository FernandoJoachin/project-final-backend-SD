import { ApiProperty } from '@nestjs/swagger';
import { Type } from 'class-transformer';
import { IsNumber, Min, Max, IsUUID, IsDateString } from 'class-validator';

export class CreateGradeDto {
  @ApiProperty({
    example: 85.5,
    description: 'Numerical grade score',
    required: true,
    type: 'number',
    format: 'decimal',
    minimum: 0,
    maximum: 100,
  })
  @Type(() => Number)
  @IsNumber()
  @Min(0)
  @Max(100)
  score: number;

  @ApiProperty({
    description: 'Date when the grade was recorded',
    required: true,
    type: 'string',
    format: 'date',
  })
  @IsDateString()
  date: Date;

  @ApiProperty({
    example: '4fcb81a9-4e28-4eca-a5e8-89adab407a30',
    description: 'ID of the student',
    required: true,
    format: 'uuid',
  })
  @IsUUID()
  studentId: string;

  @ApiProperty({
    example: '59923321-0e99-47e5-a956-04513f54ed8d',
    description: 'ID of the subject',
    required: true,
    format: 'uuid',
  })
  @IsUUID()
  subjectId: string;
}