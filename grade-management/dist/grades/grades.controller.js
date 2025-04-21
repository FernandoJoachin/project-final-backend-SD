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
exports.GradesController = void 0;
const common_1 = require("@nestjs/common");
const grades_service_1 = require("./grades.service");
const create_grade_dto_1 = require("./dto/create-grade.dto");
const update_grade_dto_1 = require("./dto/update-grade.dto");
const swagger_1 = require("@nestjs/swagger");
const grade_entity_1 = require("./entities/grade.entity");
let GradesController = class GradesController {
    constructor(gradesService) {
        this.gradesService = gradesService;
    }
    create(createGradeDto) {
        return this.gradesService.create(createGradeDto);
    }
    findAll() {
        return this.gradesService.findAll();
    }
    findOne(id) {
        return this.gradesService.findOne(id);
    }
    update(id, updateGradeDto) {
        return this.gradesService.update(id, updateGradeDto);
    }
    remove(id) {
        return this.gradesService.remove(id);
    }
};
exports.GradesController = GradesController;
__decorate([
    (0, common_1.Post)(),
    (0, swagger_1.ApiOperation)({
        summary: 'Create a new grade',
        description: 'Creates a new grade record after validating that the student and subject belong to the same grade level'
    }),
    (0, swagger_1.ApiBody)({ type: create_grade_dto_1.CreateGradeDto }),
    (0, swagger_1.ApiResponse)({ status: 201, description: 'Grade created successfully', type: grade_entity_1.Grade }),
    (0, swagger_1.ApiResponse)({ status: 404, description: 'Student or Subject not found' }),
    (0, swagger_1.ApiResponse)({ status: 409, description: 'The subject is not valid with respect to the student\'s grade level' }),
    (0, swagger_1.ApiResponse)({ status: 500, description: 'Internal server error' }),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [create_grade_dto_1.CreateGradeDto]),
    __metadata("design:returntype", void 0)
], GradesController.prototype, "create", null);
__decorate([
    (0, swagger_1.ApiOperation)({
        summary: 'Get all grades',
        description: 'Retrieves all grades with their associated student and subject information'
    }),
    (0, swagger_1.ApiResponse)({ status: 200, description: 'List of all grades', type: [grade_entity_1.Grade] }),
    (0, swagger_1.ApiResponse)({ status: 500, description: 'Internal server error' }),
    (0, common_1.Get)(),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", void 0)
], GradesController.prototype, "findAll", null);
__decorate([
    (0, swagger_1.ApiOperation)({
        summary: 'Get a grade by ID',
        description: 'Retrieves a specific grade with its associated student and subject information'
    }),
    (0, swagger_1.ApiParam)({ name: 'id', description: 'Grade ID (UUID)', format: 'uuid' }),
    (0, swagger_1.ApiResponse)({ status: 200, description: 'Grade found', type: grade_entity_1.Grade }),
    (0, swagger_1.ApiResponse)({ status: 404, description: 'Grade not found' }),
    (0, swagger_1.ApiResponse)({ status: 500, description: 'Internal server error' }),
    (0, common_1.Get)(':id'),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], GradesController.prototype, "findOne", null);
__decorate([
    (0, common_1.Patch)(':id'),
    (0, swagger_1.ApiOperation)({
        summary: 'Update a grade',
        description: 'Updates an existing grade record.'
    }),
    (0, swagger_1.ApiParam)({ name: 'id', description: 'Grade ID (UUID)', format: 'uuid' }),
    (0, swagger_1.ApiBody)({ type: update_grade_dto_1.UpdateGradeDto }),
    (0, swagger_1.ApiResponse)({ status: 200, description: 'Grade updated successfully', type: grade_entity_1.Grade }),
    (0, swagger_1.ApiResponse)({ status: 400, description: 'Invalid data provided' }),
    (0, swagger_1.ApiResponse)({ status: 404, description: 'Grade not found' }),
    (0, swagger_1.ApiResponse)({ status: 500, description: 'Internal server error' }),
    __param(0, (0, common_1.Param)('id')),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, update_grade_dto_1.UpdateGradeDto]),
    __metadata("design:returntype", void 0)
], GradesController.prototype, "update", null);
__decorate([
    (0, common_1.Delete)(':id'),
    (0, swagger_1.ApiOperation)({ summary: 'Delete a grade', description: 'Permanently removes a grade record' }),
    (0, swagger_1.ApiParam)({ name: 'id', description: 'Grade ID (UUID)', format: 'uuid' }),
    (0, swagger_1.ApiResponse)({ status: 204, description: 'Grade deleted successfully' }),
    (0, swagger_1.ApiResponse)({ status: 404, description: 'Grade not found' }),
    (0, swagger_1.ApiResponse)({ status: 500, description: 'Internal server error' }),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], GradesController.prototype, "remove", null);
exports.GradesController = GradesController = __decorate([
    (0, swagger_1.ApiTags)('Grades'),
    (0, common_1.Controller)('grades'),
    __metadata("design:paramtypes", [grades_service_1.GradesService])
], GradesController);
//# sourceMappingURL=grades.controller.js.map