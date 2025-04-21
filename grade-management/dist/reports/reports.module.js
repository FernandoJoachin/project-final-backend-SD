"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ReportsModule = void 0;
const common_1 = require("@nestjs/common");
const reports_service_1 = require("./reports.service");
const reports_controller_1 = require("./reports.controller");
const grades_service_1 = require("../grades/grades.service");
const subjects_service_1 = require("../subjects/subjects.service");
const students_service_1 = require("../students/students.service");
const typeorm_1 = require("@nestjs/typeorm");
const student_entity_1 = require("../students/entities/student.entity");
const grade_entity_1 = require("../grades/entities/grade.entity");
const subject_entity_1 = require("../subjects/entities/subject.entity");
const common_module_1 = require("../common/common.module");
let ReportsModule = class ReportsModule {
};
exports.ReportsModule = ReportsModule;
exports.ReportsModule = ReportsModule = __decorate([
    (0, common_1.Module)({
        controllers: [reports_controller_1.ReportsController],
        providers: [reports_service_1.ReportsService, grades_service_1.GradesService, subjects_service_1.SubjectsService, students_service_1.StudentsService],
        imports: [
            typeorm_1.TypeOrmModule.forFeature([student_entity_1.Student, grade_entity_1.Grade, subject_entity_1.Subject]),
            common_module_1.CommonModule
        ],
    })
], ReportsModule);
//# sourceMappingURL=reports.module.js.map