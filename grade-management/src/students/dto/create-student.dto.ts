import { ApiProperty } from '@nestjs/swagger';
import { IsEmail, IsInt, IsString, Min, Max } from 'class-validator';

export class CreateStudentDto {
  @ApiProperty({
    example: 'A01234567',
    description: 'Unique student identification number',
    required: true,
  })
  @IsString()
  studentId: string; //matricula

  @ApiProperty({
    example: 'John Doe',
    description: 'Full name of the student',
    required: true,
  })
  @IsString()
  name: string;

  @ApiProperty({
    example: 9,
    description: 'Current grade level of the student',
    required: true,
    minimum: 1,
    maximum: 9,
  })
  @IsInt()
  @Min(1)
  @Max(9)
  gradeLevel: number;

  @ApiProperty({
    example: 'john.doe@school.edu',
    description: 'Student email address',
    required: true,
  })
  @IsEmail()
  email: string;
}