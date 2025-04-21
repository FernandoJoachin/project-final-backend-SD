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
exports.StudentsController = void 0;
const common_1 = require("@nestjs/common");
const students_service_1 = require("./students.service");
const create_student_dto_1 = require("./dto/create-student.dto");
const update_student_dto_1 = require("./dto/update-student.dto");
const swagger_1 = require("@nestjs/swagger");
const student_entity_1 = require("./entities/student.entity");
let StudentsController = class StudentsController {
    constructor(studentsService) {
        this.studentsService = studentsService;
    }
    create(createStudentDto) {
        return this.studentsService.create(createStudentDto);
    }
    findAll() {
        return this.studentsService.findAll();
    }
    findOne(id) {
        return this.studentsService.findOne(id);
    }
    update(id, updateStudentDto) {
        return this.studentsService.update(id, updateStudentDto);
    }
    remove(id) {
        return this.studentsService.remove(id);
    }
};
exports.StudentsController = StudentsController;
__decorate([
    (0, common_1.Post)(),
    (0, swagger_1.ApiOperation)({ summary: 'Create a new student' }),
    (0, swagger_1.ApiBody)({ type: create_student_dto_1.CreateStudentDto, description: 'Student data to create' }),
    (0, swagger_1.ApiResponse)({ status: 201, description: 'Student created successfully', type: student_entity_1.Student }),
    (0, swagger_1.ApiResponse)({ status: 400, description: 'Invalid data provided' }),
    (0, swagger_1.ApiResponse)({ status: 409, description: 'Student ID or email already exists' }),
    (0, swagger_1.ApiResponse)({ status: 500, description: 'Internal server error' }),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [create_student_dto_1.CreateStudentDto]),
    __metadata("design:returntype", void 0)
], StudentsController.prototype, "create", null);
__decorate([
    (0, common_1.Get)(),
    (0, swagger_1.ApiOperation)({ summary: 'Get all students' }),
    (0, swagger_1.ApiResponse)({ status: 200, description: 'List of all students', type: [student_entity_1.Student] }),
    (0, swagger_1.ApiResponse)({ status: 500, description: 'Internal server error' }),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", void 0)
], StudentsController.prototype, "findAll", null);
__decorate([
    (0, common_1.Get)(':id'),
    (0, swagger_1.ApiOperation)({ summary: 'Get a student by ID' }),
    (0, swagger_1.ApiParam)({ name: 'id', description: 'Student ID (UUID)', format: 'uuid' }),
    (0, swagger_1.ApiResponse)({ status: 200, description: 'Student found', type: student_entity_1.Student }),
    (0, swagger_1.ApiResponse)({ status: 404, description: 'Student not found' }),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], StudentsController.prototype, "findOne", null);
__decorate([
    (0, common_1.Patch)(':id'),
    (0, swagger_1.ApiOperation)({ summary: 'Update a student' }),
    (0, swagger_1.ApiParam)({ name: 'id', description: 'Student ID (UUID)', format: 'uuid' }),
    (0, swagger_1.ApiBody)({ type: update_student_dto_1.UpdateStudentDto, description: 'Student data to update' }),
    (0, swagger_1.ApiResponse)({ status: 200, description: 'Student updated successfully', type: student_entity_1.Student }),
    (0, swagger_1.ApiResponse)({ status: 404, description: 'Student not found' }),
    (0, swagger_1.ApiResponse)({ status: 400, description: 'Invalid data provided' }),
    (0, swagger_1.ApiResponse)({ status: 409, description: 'New student ID or email already exists' }),
    (0, swagger_1.ApiResponse)({ status: 500, description: 'Internal server error' }),
    __param(0, (0, common_1.Param)('id')),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, update_student_dto_1.UpdateStudentDto]),
    __metadata("design:returntype", void 0)
], StudentsController.prototype, "update", null);
__decorate([
    (0, common_1.Delete)(':id'),
    (0, swagger_1.ApiOperation)({ summary: 'Delete a student' }),
    (0, swagger_1.ApiParam)({ name: 'id', description: 'Student ID (UUID)', format: 'uuid' }),
    (0, swagger_1.ApiResponse)({ status: 204, description: 'Student deleted successfully' }),
    (0, swagger_1.ApiResponse)({ status: 404, description: 'Student not found' }),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], StudentsController.prototype, "remove", null);
exports.StudentsController = StudentsController = __decorate([
    (0, swagger_1.ApiTags)('Students'),
    (0, common_1.Controller)('students'),
    __metadata("design:paramtypes", [students_service_1.StudentsService])
], StudentsController);
//# sourceMappingURL=students.controller.js.map