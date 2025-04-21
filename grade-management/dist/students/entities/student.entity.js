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
exports.Student = void 0;
const typeorm_1 = require("typeorm");
const grade_entity_1 = require("../../grades/entities/grade.entity");
const swagger_1 = require("@nestjs/swagger");
let Student = class Student {
};
exports.Student = Student;
__decorate([
    (0, swagger_1.ApiProperty)({
        example: '4fcb81a9-4e28-4eca-a5e8-89adab407a30',
        description: 'Automatically generated unique ID',
        format: 'uuid',
    }),
    (0, typeorm_1.PrimaryGeneratedColumn)('uuid'),
    __metadata("design:type", String)
], Student.prototype, "id", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        example: 'A01234567',
        description: 'Unique student identification number',
        uniqueItems: true,
    }),
    (0, typeorm_1.Column)({ unique: true }),
    __metadata("design:type", String)
], Student.prototype, "studentId", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        example: 'John Doe',
        description: 'Full name of the student',
    }),
    (0, typeorm_1.Column)(),
    __metadata("design:type", String)
], Student.prototype, "name", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        example: 9,
        description: 'Current grade level of the student',
        minimum: 1,
        maximum: 9,
    }),
    (0, typeorm_1.Column)(),
    __metadata("design:type", Number)
], Student.prototype, "gradeLevel", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        example: 'john.doe@school.edu',
        description: 'Student email address',
        uniqueItems: true,
    }),
    (0, typeorm_1.Column)({ unique: true }),
    __metadata("design:type", String)
], Student.prototype, "email", void 0);
__decorate([
    (0, typeorm_1.OneToMany)(() => grade_entity_1.Grade, (grade) => grade.student),
    __metadata("design:type", Array)
], Student.prototype, "grades", void 0);
exports.Student = Student = __decorate([
    (0, swagger_1.ApiTags)('Students'),
    (0, typeorm_1.Entity)()
], Student);
//# sourceMappingURL=student.entity.js.map