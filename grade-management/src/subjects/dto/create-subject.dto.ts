import { ApiProperty } from '@nestjs/swagger';
import { IsInt, IsString, Min, Max } from 'class-validator';

export class CreateSubjectDto {
  @ApiProperty({
    example: 'Mathematics',
    description: 'Name of the subject',
    required: true,
  })
  @IsString()
  name: string;

  @ApiProperty({
    example: 9,
    description: 'Grade level this subject belongs to',
    required: true,
    minimum: 1,
    maximum: 9,
  })
  @IsInt()
  @Min(1)
  @Max(9)
  gradeLevel: number;
}