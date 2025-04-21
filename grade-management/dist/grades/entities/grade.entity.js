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
exports.Grade = void 0;
const typeorm_1 = require("typeorm");
const student_entity_1 = require("../../students/entities/student.entity");
const subject_entity_1 = require("../../subjects/entities/subject.entity");
const swagger_1 = require("@nestjs/swagger");
let Grade = class Grade {
};
exports.Grade = Grade;
__decorate([
    (0, swagger_1.ApiProperty)({
        example: 'fa0bcbd3-8f72-4aa7-935e-32cefd0a291a',
        description: 'Automatically generated unique ID',
        format: 'uuid',
    }),
    (0, typeorm_1.PrimaryGeneratedColumn)('uuid'),
    __metadata("design:type", String)
], Grade.prototype, "id", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        example: 85.5,
        description: 'Numerical grade score',
        type: 'number',
        format: 'decimal',
        minimum: 0,
        maximum: 100,
    }),
    (0, typeorm_1.Column)({
        type: 'decimal',
        precision: 5,
        scale: 2,
        transformer: {
            to: (value) => value,
            from: (value) => parseFloat(value)
        },
    }),
    __metadata("design:type", Number)
], Grade.prototype, "score", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        example: '2023-05-15',
        description: 'Date when the grade was recorded',
        type: 'string',
        format: 'date',
    }),
    (0, typeorm_1.Column)(),
    __metadata("design:type", Date)
], Grade.prototype, "date", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        type: () => student_entity_1.Student,
        description: 'Student associated with this grade',
    }),
    (0, typeorm_1.ManyToOne)(() => student_entity_1.Student, (student) => student.grades),
    __metadata("design:type", student_entity_1.Student)
], Grade.prototype, "student", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        type: () => subject_entity_1.Subject,
        description: 'Subject associated with this grade',
    }),
    (0, typeorm_1.ManyToOne)(() => subject_entity_1.Subject, (subject) => subject.grades),
    __metadata("design:type", subject_entity_1.Subject)
], Grade.prototype, "subject", void 0);
exports.Grade = Grade = __decorate([
    (0, swagger_1.ApiTags)('Grades'),
    (0, typeorm_1.Entity)()
], Grade);
//# sourceMappingURL=grade.entity.js.map