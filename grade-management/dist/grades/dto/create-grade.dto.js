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
exports.CreateGradeDto = void 0;
const swagger_1 = require("@nestjs/swagger");
const class_transformer_1 = require("class-transformer");
const class_validator_1 = require("class-validator");
class CreateGradeDto {
}
exports.CreateGradeDto = CreateGradeDto;
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
], CreateGradeDto.prototype, "score", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        description: 'Date when the grade was recorded',
        required: true,
        type: 'string',
        format: 'date',
    }),
    (0, class_validator_1.IsDateString)(),
    __metadata("design:type", Date)
], CreateGradeDto.prototype, "date", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        example: '4fcb81a9-4e28-4eca-a5e8-89adab407a30',
        description: 'ID of the student',
        required: true,
        format: 'uuid',
    }),
    (0, class_validator_1.IsUUID)(),
    __metadata("design:type", String)
], CreateGradeDto.prototype, "studentId", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        example: '59923321-0e99-47e5-a956-04513f54ed8d',
        description: 'ID of the subject',
        required: true,
        format: 'uuid',
    }),
    (0, class_validator_1.IsUUID)(),
    __metadata("design:type", String)
], CreateGradeDto.prototype, "subjectId", void 0);
//# sourceMappingURL=create-grade.dto.js.map