import { ReportsService } from './reports.service';
import { IrregularStudentReportResponse, RegularStudentReportResponse } from './dto/report-responses.dto';
export declare class ReportsController {
    private readonly reportsService;
    constructor(reportsService: ReportsService);
    generateStudentReport(id: string): Promise<{
        student: import("../students/entities/student.entity").Student;
        grades: import("../grades/entities/grade.entity").Grade[];
        average: string | number;
    }>;
    generateSubjectReport(id: string): Promise<{
        subject: import("../subjects/entities/subject.entity").Subject;
        grades: import("../grades/entities/grade.entity").Grade[];
        average: number;
    }>;
    findRegularStudents(gradeLevel?: number): Promise<RegularStudentReportResponse[]>;
    findIrregularStudents(gradeLevel?: number): Promise<IrregularStudentReportResponse[]>;
}
