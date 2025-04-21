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
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ReportsController = void 0;
const common_1 = require("@nestjs/common");
const reports_service_1 = require("./reports.service");
const swagger_1 = require("@nestjs/swagger");
const report_responses_dto_1 = require("./dto/report-responses.dto");
let ReportsController = class ReportsController {
    constructor(reportsService) {
        this.reportsService = reportsService;
    }
    generateStudentReport(id) {
        return this.reportsService.generateStudentReport(id);
    }
    generateSubjectReport(id) {
        return this.reportsService.generateSubjectReport(id);
    }
    findRegularStudents(gradeLevel) {
        return this.reportsService.findRegularStudents(gradeLevel ? +gradeLevel : undefined);
    }
    findIrregularStudents(gradeLevel) {
        return this.reportsService.findIrregularStudents(gradeLevel ? +gradeLevel : undefined);
    }
};
exports.ReportsController = ReportsController;
__decorate([
    (0, common_1.Get)('student/:id'),
    (0, swagger_1.ApiOperation)({
        summary: 'Generate student academic report',
        description: 'Generates a detailed academic report for a specific student including all grades and average score'
    }),
    (0, swagger_1.ApiParam)({
        name: 'id',
        description: 'Student ID (UUID)',
        example: '3fa85f64-5717-4562-b3fc-2c963f66afa6'
    }),
    (0, swagger_1.ApiResponse)({
        status: 200,
        description: 'Student report generated successfully',
        type: report_responses_dto_1.StudentReportResponse
    }),
    (0, swagger_1.ApiResponse)({ status: 404, description: 'Student not found' }),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], ReportsController.prototype, "generateStudentReport", null);
__decorate([
    (0, common_1.Get)('subject/:id'),
    (0, swagger_1.ApiOperation)({
        summary: 'Generate subject performance report',
        description: 'Generates a report showing all student grades for a specific subject and the class average'
    }),
    (0, swagger_1.ApiParam)({
        name: 'id',
        description: 'Subject ID (UUID)',
        example: '3fa85f64-5717-4562-b3fc-2c963f66afa6'
    }),
    (0, swagger_1.ApiResponse)({
        status: 200,
        description: 'Subject report generated successfully',
        type: report_responses_dto_1.SubjectReportResponse
    }),
    (0, swagger_1.ApiResponse)({ status: 404, description: 'Subject not found' }),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], ReportsController.prototype, "generateSubjectReport", null);
__decorate([
    (0, common_1.Get)('regular-students'),
    (0, swagger_1.ApiOperation)({
        summary: 'List students with passing grades',
        description: 'Returns students with no failing grades (all grades ≥ 60) optionally filtered by grade level'
    }),
    (0, swagger_1.ApiQuery)({
        name: 'gradeLevel',
        required: false,
        description: 'Filter students by grade level (1-12)',
        type: Number,
        example: 10
    }),
    (0, swagger_1.ApiResponse)({
        status: 200,
        description: 'List of regular students',
        type: report_responses_dto_1.RegularStudentReportResponse,
        isArray: true
    }),
    __param(0, (0, common_1.Query)('gradeLevel')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number]),
    __metadata("design:returntype", void 0)
], ReportsController.prototype, "findRegularStudents", null);
__decorate([
    (0, common_1.Get)('irregular-students'),
    (0, swagger_1.ApiOperation)({
        summary: 'List students with failing grades',
        description: 'Returns students with at least one failing grade (<60) optionally filtered by grade level'
    }),
    (0, swagger_1.ApiQuery)({
        name: 'gradeLevel',
        required: false,
        description: 'Filter students by grade level (1-12)',
        type: Number,
        example: 10
    }),
    (0, swagger_1.ApiResponse)({
        status: 200,
        description: 'List of irregular students with failing counts',
        type: report_responses_dto_1.IrregularStudentReportResponse,
        isArray: true
    }),
    __param(0, (0, common_1.Query)('gradeLevel')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number]),
    __metadata("design:returntype", void 0)
], ReportsController.prototype, "findIrregularStudents", null);
exports.ReportsController = ReportsController = __decorate([
    (0, swagger_1.ApiTags)('Reports'),
    (0, common_1.Controller)('reports'),
    __metadata("design:paramtypes", [reports_service_1.ReportsService])
], ReportsController);
//# sourceMappingURL=reports.controller.js.map