"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ReportsService = void 0;
const common_1 = require("@nestjs/common");
const students_service_1 = require("../students/students.service");
const grades_service_1 = require("../grades/grades.service");
const subjects_service_1 = require("../subjects/subjects.service");
let ReportsService = class ReportsService {
    constructor(studentsService, gradesService, subjectsService) {
        this.studentsService = studentsService;
        this.gradesService = gradesService;
        this.subjectsService = subjectsService;
    }
    async generateStudentReport(studentId) {
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
    async generateSubjectReport(subjectId) {
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
    async findRegularStudents(gradeLevel) {
        const students = gradeLevel
            ? (await this.studentsService.findAll()).filter(s => s.gradeLevel === gradeLevel)
            : await this.studentsService.findAll();
        const results = await Promise.all(students.map(async (student) => {
            const grades = await this.gradesService.findByStudent(student.id);
            const hasFailingGrade = grades.some(grade => grade.score < 70);
            return { student, isRegular: !hasFailingGrade };
        }));
        const regularStudents = results.filter(r => r.isRegular).map(r => r.student);
        const groupedByGrade = [];
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
    async findIrregularStudents(gradeLevel) {
        const students = gradeLevel
            ? (await this.studentsService.findAll()).filter(s => s.gradeLevel === gradeLevel)
            : await this.studentsService.findAll();
        const results = await Promise.all(students.map(async (student) => {
            const grades = await this.gradesService.findByStudent(student.id);
            const failingSubjectsCount = grades.filter(g => g.score < 70).length;
            if (failingSubjectsCount > 0) {
                return { student, failingSubjectsCount };
            }
            else {
                return null;
            }
        }));
        const irregularStudents = results.filter(r => r !== null);
        const groupedByGrade = [];
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
};
exports.ReportsService = ReportsService;
exports.ReportsService = ReportsService = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [students_service_1.StudentsService,
        grades_service_1.GradesService,
        subjects_service_1.SubjectsService])
], ReportsService);
//# sourceMappingURL=reports.service.js.map