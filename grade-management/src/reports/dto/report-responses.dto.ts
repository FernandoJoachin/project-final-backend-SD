import { ApiProperty } from '@nestjs/swagger';
import { Grade } from 'src/grades/entities/grade.entity';
import { Student } from 'src/students/entities/student.entity';
import { Subject } from 'src/subjects/entities/subject.entity';

export class StudentReportResponse {
  @ApiProperty({ type: Student })
  student: Student;

  @ApiProperty({ type: [Grade] })
  grades: Grade[];

  @ApiProperty({ example: 85.5, description: 'Average score across all subjects' })
  average: number;
}

export class SubjectReportResponse {
  @ApiProperty({ type: Subject })
  subject: Subject;

  @ApiProperty({
    type: 'array',
    items: {
      properties: {
        id: { type: 'string', format: 'uuid' },
        score: { type: 'number' },
        date: { type: 'string', format: 'date-time' },
        student: { $ref: '#/components/schemas/Student' }
      }
    }
  })
  grades: Array<{
    id: string;
    score: number;
    date: Date;
    student: Student;
  }>;

  @ApiProperty({ example: 78.2, description: 'Average score across all students' })
  average: number;
}

export class RegularStudentReportResponse {
  @ApiProperty({
    example: 9,
    description: 'Grade level',
    minimum: 1,
    maximum: 9,
  })
  gradeLevel: number;

  @ApiProperty({
    type: [Student],
    description: 'List of students in this grade',
  })
  students: Student[];
}


export class IrregularStudentInfo {
  @ApiProperty({ type: () => Student })
    student: Student;
  
  @ApiProperty({
    example: 2,
    description: 'Number of failed subjects (score below 70)'
  })
  failingSubjectsCount: number;
}

export class IrregularStudentReportResponse {
  @ApiProperty({
    example: 9,
    description: 'Grade level',
    minimum: 1,
    maximum: 9,
  })
  gradeLevel: number;

  @ApiProperty({
    type: [IrregularStudentInfo],
    description: 'List of irregular students in this grade, including how many subjects they failed'
  })
  students: IrregularStudentInfo[];
}