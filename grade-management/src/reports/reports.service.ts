import { Injectable } from '@nestjs/common';
import { StudentsService } from '../students/students.service';
import { GradesService } from '../grades/grades.service';
import { SubjectsService } from '../subjects/subjects.service';
import { IrregularStudentReportResponse, RegularStudentReportResponse } from './dto/report-responses.dto';
import { Student } from 'src/students/entities/student.entity';

@Injectable()
export class ReportsService {
  constructor(
    private studentsService: StudentsService,
    private gradesService: GradesService,
    private subjectsService: SubjectsService,
  ) {}

  async generateStudentReport(studentId: string) {
    const student = await this.studentsService.findOne(studentId);
    const grades = await this.gradesService.findByStudent(studentId);
    
    const total = grades.reduce((sum, grade) => sum + grade.score, 0);
    const average = grades.length > 0 ? (total / grades.length).toFixed(2) : 0;
    
    return {
      student,
      grades,
      average,
    };
  }

  async generateSubjectReport(subjectId: string) {
    const subject = await this.subjectsService.findOne(subjectId);
    const grades = await this.gradesService.findBySubject(subjectId);
    
    const total = grades.reduce((sum, grade) => sum + grade.score, 0);
    const average = grades.length > 0 ? total / grades.length : 0;
    
    return {
      subject,
      grades,
      average,
    };
  }

  async findRegularStudents(gradeLevel?: number) {
    const students = gradeLevel 
      ? (await this.studentsService.findAll()).filter(s => s.gradeLevel === gradeLevel)
      : await this.studentsService.findAll();
    
    const results = await Promise.all(students.map(async student => {
      const grades = await this.gradesService.findByStudent(student.id);
      const hasFailingGrade = grades.some(grade => grade.score < 70);
      return { student, isRegular: !hasFailingGrade };
    }));
    
    const regularStudents = results.filter(r => r.isRegular).map(r => r.student);

    const groupedByGrade: RegularStudentReportResponse[] = [];

    regularStudents.forEach(student => {
      let group = groupedByGrade.find(g => g.gradeLevel === student.gradeLevel);
      if (!group) {
        group = { gradeLevel: student.gradeLevel, students: [] };
        groupedByGrade.push(group);
      }
      group.students.push(student);
    });
  
    return groupedByGrade;
  }

  async findIrregularStudents(gradeLevel?: number) {
    const students = gradeLevel 
      ? (await this.studentsService.findAll()).filter(s => s.gradeLevel === gradeLevel)
      : await this.studentsService.findAll();
    
      const results = await Promise.all(students.map(async student => {
        const grades = await this.gradesService.findByStudent(student.id);
        const failingSubjectsCount = grades.filter(g => g.score < 70).length;
    
        if (failingSubjectsCount > 0) {
          return { student, failingSubjectsCount };
        } else {
          return null;
        }
      }));
    
    const irregularStudents = results.filter(r => r !== null);
  
    const groupedByGrade: IrregularStudentReportResponse[] = [];
  
    irregularStudents.forEach(({ student, failingSubjectsCount }) => {
      let group = groupedByGrade.find(g => g.gradeLevel === student.gradeLevel);
      if (!group) {
        group = { gradeLevel: student.gradeLevel, students: [] };
        groupedByGrade.push(group);
      }
      group.students.push({ student, failingSubjectsCount });
    });
  
    return groupedByGrade;
  }
}