import { StudentsService } from '../students/students.service';
import { GradesService } from '../grades/grades.service';
import { SubjectsService } from '../subjects/subjects.service';
import { IrregularStudentReportResponse, RegularStudentReportResponse } from './dto/report-responses.dto';
import { Student } from 'src/students/entities/student.entity';
export declare class ReportsService {
    private studentsService;
    private gradesService;
    private subjectsService;
    constructor(studentsService: StudentsService, gradesService: GradesService, subjectsService: SubjectsService);
    generateStudentReport(studentId: string): Promise<{
        student: Student;
        grades: import("../grades/entities/grade.entity").Grade[];
        average: string | number;
    }>;
    generateSubjectReport(subjectId: string): Promise<{
        subject: import("../subjects/entities/subject.entity").Subject;
        grades: import("../grades/entities/grade.entity").Grade[];
        average: number;
    }>;
    findRegularStudents(gradeLevel?: number): Promise<RegularStudentReportResponse[]>;
    findIrregularStudents(gradeLevel?: number): Promise<IrregularStudentReportResponse[]>;
}
