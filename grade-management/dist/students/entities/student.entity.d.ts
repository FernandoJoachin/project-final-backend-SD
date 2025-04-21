import { Grade } from '../../grades/entities/grade.entity';
export declare class Student {
    id: string;
    studentId: string;
    name: string;
    gradeLevel: number;
    email: string;
    grades: Grade[];
}
