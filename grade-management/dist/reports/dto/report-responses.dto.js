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
exports.IrregularStudentReportResponse = exports.IrregularStudentInfo = exports.RegularStudentReportResponse = exports.SubjectReportResponse = exports.StudentReportResponse = void 0;
const swagger_1 = require("@nestjs/swagger");
const grade_entity_1 = require("../../grades/entities/grade.entity");
const student_entity_1 = require("../../students/entities/student.entity");
const subject_entity_1 = require("../../subjects/entities/subject.entity");
class StudentReportResponse {
}
exports.StudentReportResponse = StudentReportResponse;
__decorate([
    (0, swagger_1.ApiProperty)({ type: student_entity_1.Student }),
    __metadata("design:type", student_entity_1.Student)
], StudentReportResponse.prototype, "student", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ type: [grade_entity_1.Grade] }),
    __metadata("design:type", Array)
], StudentReportResponse.prototype, "grades", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ example: 85.5, description: 'Average score across all subjects' }),
    __metadata("design:type", Number)
], StudentReportResponse.prototype, "average", void 0);
class SubjectReportResponse {
}
exports.SubjectReportResponse = SubjectReportResponse;
__decorate([
    (0, swagger_1.ApiProperty)({ type: subject_entity_1.Subject }),
    __metadata("design:type", subject_entity_1.Subject)
], SubjectReportResponse.prototype, "subject", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        type: 'array',
        items: {
            properties: {
                id: { type: 'string', format: 'uuid' },
                score: { type: 'number' },
                date: { type: 'string', format: 'date-time' },
                student: { $ref: '#/components/schemas/Student' }
            }
        }
    }),
    __metadata("design:type", Array)
], SubjectReportResponse.prototype, "grades", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ example: 78.2, description: 'Average score across all students' }),
    __metadata("design:type", Number)
], SubjectReportResponse.prototype, "average", void 0);
class RegularStudentReportResponse {
}
exports.RegularStudentReportResponse = RegularStudentReportResponse;
__decorate([
    (0, swagger_1.ApiProperty)({
        example: 9,
        description: 'Grade level',
        minimum: 1,
        maximum: 9,
    }),
    __metadata("design:type", Number)
], RegularStudentReportResponse.prototype, "gradeLevel", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        type: [student_entity_1.Student],
        description: 'List of students in this grade',
    }),
    __metadata("design:type", Array)
], RegularStudentReportResponse.prototype, "students", void 0);
class IrregularStudentInfo {
}
exports.IrregularStudentInfo = IrregularStudentInfo;
__decorate([
    (0, swagger_1.ApiProperty)({ type: () => student_entity_1.Student }),
    __metadata("design:type", student_entity_1.Student)
], IrregularStudentInfo.prototype, "student", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        example: 2,
        description: 'Number of failed subjects (score below 70)'
    }),
    __metadata("design:type", Number)
], IrregularStudentInfo.prototype, "failingSubjectsCount", void 0);
class IrregularStudentReportResponse {
}
exports.IrregularStudentReportResponse = IrregularStudentReportResponse;
__decorate([
    (0, swagger_1.ApiProperty)({
        example: 9,
        description: 'Grade level',
        minimum: 1,
        maximum: 9,
    }),
    __metadata("design:type", Number)
], IrregularStudentReportResponse.prototype, "gradeLevel", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        type: [IrregularStudentInfo],
        description: 'List of irregular students in this grade, including how many subjects they failed'
    }),
    __metadata("design:type", Array)
], IrregularStudentReportResponse.prototype, "students", void 0);
//# sourceMappingURL=report-responses.dto.js.map