import { Grade } from '../../grades/entities/grade.entity';
export declare class Subject {
    id: string;
    name: string;
    gradeLevel: number;
    grades: Grade[];
}
