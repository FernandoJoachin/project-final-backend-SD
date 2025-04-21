import { Grade } from 'src/grades/entities/grade.entity';
import { Student } from 'src/students/entities/student.entity';
import { Subject } from 'src/subjects/entities/subject.entity';
export declare class StudentReportResponse {
    student: Student;
    grades: Grade[];
    average: number;
}
export declare class SubjectReportResponse {
    subject: Subject;
    grades: Array<{
        id: string;
        score: number;
        date: Date;
        student: Student;
    }>;
    average: number;
}
export declare class RegularStudentReportResponse {
    gradeLevel: number;
    students: Student[];
}
export declare class IrregularStudentInfo {
    student: Student;
    failingSubjectsCount: number;
}
export declare class IrregularStudentReportResponse {
    gradeLevel: number;
    students: IrregularStudentInfo[];
}
