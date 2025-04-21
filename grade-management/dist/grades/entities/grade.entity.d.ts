import { Student } from '../../students/entities/student.entity';
import { Subject } from '../../subjects/entities/subject.entity';
export declare class Grade {
    id: string;
    score: number;
    date: Date;
    student: Student;
    subject: Subject;
}
