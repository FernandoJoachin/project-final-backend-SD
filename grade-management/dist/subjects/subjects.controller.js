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
exports.SubjectsController = void 0;
const common_1 = require("@nestjs/common");
const subjects_service_1 = require("./subjects.service");
const create_subject_dto_1 = require("./dto/create-subject.dto");
const update_subject_dto_1 = require("./dto/update-subject.dto");
const swagger_1 = require("@nestjs/swagger");
const subject_entity_1 = require("./entities/subject.entity");
let SubjectsController = class SubjectsController {
    constructor(subjectsService) {
        this.subjectsService = subjectsService;
    }
    create(createSubjectDto) {
        return this.subjectsService.create(createSubjectDto);
    }
    findAll() {
        return this.subjectsService.findAll();
    }
    findOne(id) {
        return this.subjectsService.findOne(id);
    }
    update(id, updateSubjectDto) {
        return this.subjectsService.update(id, updateSubjectDto);
    }
    remove(id) {
        return this.subjectsService.remove(id);
    }
};
exports.SubjectsController = SubjectsController;
__decorate([
    (0, common_1.Post)(),
    (0, swagger_1.ApiOperation)({ summary: 'Create a new subject' }),
    (0, swagger_1.ApiBody)({ type: create_subject_dto_1.CreateSubjectDto }),
    (0, swagger_1.ApiResponse)({ status: 201, description: 'Subject created', type: subject_entity_1.Subject }),
    (0, swagger_1.ApiResponse)({ status: 400, description: 'Invalid data' }),
    (0, swagger_1.ApiResponse)({ status: 409, description: 'Subject name already exists' }),
    (0, swagger_1.ApiResponse)({ status: 500, description: 'Internal server error' }),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [create_subject_dto_1.CreateSubjectDto]),
    __metadata("design:returntype", void 0)
], SubjectsController.prototype, "create", null);
__decorate([
    (0, swagger_1.ApiOperation)({ summary: 'Get all subjects' }),
    (0, swagger_1.ApiResponse)({ status: 200, description: 'List of subjects', type: [subject_entity_1.Subject] }),
    (0, swagger_1.ApiResponse)({ status: 500, description: 'Internal server error' }),
    (0, common_1.Get)(),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", void 0)
], SubjectsController.prototype, "findAll", null);
__decorate([
    (0, swagger_1.ApiOperation)({ summary: 'Get a subject by ID' }),
    (0, swagger_1.ApiParam)({ name: 'id', description: 'Subject ID', format: 'uuid' }),
    (0, swagger_1.ApiResponse)({ status: 200, description: 'Subject found', type: subject_entity_1.Subject }),
    (0, swagger_1.ApiResponse)({ status: 404, description: 'Subject not found' }),
    (0, common_1.Get)(':id'),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], SubjectsController.prototype, "findOne", null);
__decorate([
    (0, common_1.Patch)(':id'),
    (0, swagger_1.ApiOperation)({ summary: 'Update an existing subject' }),
    (0, swagger_1.ApiParam)({ name: 'id', description: 'Subject ID', format: 'uuid' }),
    (0, swagger_1.ApiBody)({ type: update_subject_dto_1.UpdateSubjectDto }),
    (0, swagger_1.ApiResponse)({ status: 200, description: 'Subject updated', type: subject_entity_1.Subject }),
    (0, swagger_1.ApiResponse)({ status: 404, description: 'Subject not found' }),
    (0, swagger_1.ApiResponse)({ status: 400, description: 'Invalid data' }),
    (0, swagger_1.ApiResponse)({ status: 500, description: 'Internal server error' }),
    __param(0, (0, common_1.Param)('id')),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, update_subject_dto_1.UpdateSubjectDto]),
    __metadata("design:returntype", void 0)
], SubjectsController.prototype, "update", null);
__decorate([
    (0, common_1.Delete)(':id'),
    (0, swagger_1.ApiOperation)({ summary: 'Delete a subject' }),
    (0, swagger_1.ApiParam)({ name: 'id', description: 'Subject ID', format: 'uuid' }),
    (0, swagger_1.ApiResponse)({ status: 204, description: 'Subject deleted' }),
    (0, swagger_1.ApiResponse)({ status: 404, description: 'Subject not found' }),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], SubjectsController.prototype, "remove", null);
exports.SubjectsController = SubjectsController = __decorate([
    (0, swagger_1.ApiTags)('Subjects'),
    (0, common_1.Controller)('subjects'),
    __metadata("design:paramtypes", [subjects_service_1.SubjectsService])
], SubjectsController);
//# sourceMappingURL=subjects.controller.js.map