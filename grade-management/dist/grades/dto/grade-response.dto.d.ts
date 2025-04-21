import { Student } from 'src/students/entities/student.entity';
import { Subject } from 'src/subjects/entities/subject.entity';
export declare class GradeResponseDto {
    score: number;
    date: Date;
    student: Student;
    subject: Subject;
}
export declare class GradeByStudentResponseDto {
    score: number;
    date: Date;
    subject: Subject;
}
