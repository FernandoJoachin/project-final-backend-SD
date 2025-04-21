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
exports.GradeByStudentResponseDto = exports.GradeResponseDto = void 0;
const swagger_1 = require("@nestjs/swagger");
const class_transformer_1 = require("class-transformer");
const class_validator_1 = require("class-validator");
const student_entity_1 = require("../../students/entities/student.entity");
const subject_entity_1 = require("../../subjects/entities/subject.entity");
class GradeResponseDto {
}
exports.GradeResponseDto = GradeResponseDto;
__decorate([
    (0, swagger_1.ApiProperty)({
        example: 85.5,
        description: 'Numerical grade score',
        required: true,
        type: 'number',
        format: 'decimal',
        minimum: 0,
        maximum: 100,
    }),
    (0, class_transformer_1.Type)(() => Number),
    (0, class_validator_1.IsNumber)(),
    (0, class_validator_1.Min)(0),
    (0, class_validator_1.Max)(100),
    __metadata("design:type", Number)
], GradeResponseDto.prototype, "score", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        description: 'Date when the grade was recorded',
        required: true,
        type: 'string',
        format: 'date',
    }),
    (0, class_validator_1.IsDateString)(),
    __metadata("design:type", Date)
], GradeResponseDto.prototype, "date", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ type: () => student_entity_1.Student }),
    __metadata("design:type", student_entity_1.Student)
], GradeResponseDto.prototype, "student", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ type: () => subject_entity_1.Subject }),
    __metadata("design:type", subject_entity_1.Subject)
], GradeResponseDto.prototype, "subject", void 0);
class GradeByStudentResponseDto {
}
exports.GradeByStudentResponseDto = GradeByStudentResponseDto;
__decorate([
    (0, swagger_1.ApiProperty)({
        example: 85.5,
        description: 'Numerical grade score',
        required: true,
        type: 'number',
        format: 'decimal',
        minimum: 0,
        maximum: 100,
    }),
    (0, class_transformer_1.Type)(() => Number),
    (0, class_validator_1.IsNumber)(),
    (0, class_validator_1.Min)(0),
    (0, class_validator_1.Max)(100),
    __metadata("design:type", Number)
], GradeByStudentResponseDto.prototype, "score", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        description: 'Date when the grade was recorded',
        required: true,
        type: 'string',
        format: 'date',
    }),
    (0, class_validator_1.IsDateString)(),
    __metadata("design:type", Date)
], GradeByStudentResponseDto.prototype, "date", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ type: () => subject_entity_1.Subject }),
    __metadata("design:type", subject_entity_1.Subject)
], GradeByStudentResponseDto.prototype, "subject", void 0);
//# sourceMappingURL=grade-response.dto.js.map