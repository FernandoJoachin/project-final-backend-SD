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
exports.GradesService = void 0;
const common_1 = require("@nestjs/common");
const grade_entity_1 = require("./entities/grade.entity");
const typeorm_1 = require("@nestjs/typeorm");
const typeorm_2 = require("typeorm");
const students_service_1 = require("../students/students.service");
const subjects_service_1 = require("../subjects/subjects.service");
const exception_service_1 = require("../common/exception.service");
let GradesService = class GradesService {
    constructor(gradesRepository, studentsService, subjectsService, exceptionService) {
        this.gradesRepository = gradesRepository;
        this.studentsService = studentsService;
        this.subjectsService = subjectsService;
        this.exceptionService = exceptionService;
        this.logger = new common_1.Logger('GradesService');
    }
    async create(createGradeDto) {
        const { studentId, subjectId } = createGradeDto;
        const student = await this.studentsService.findOne(studentId);
        const subject = await this.subjectsService.findOne(subjectId);
        if (student.gradeLevel < subject.gradeLevel) {
            throw new common_1.ConflictException('The subject is not valid with respect to the student\'s grade level');
        }
        try {
            const grade = this.gradesRepository.create({
                score: createGradeDto.score,
                date: createGradeDto.date,
                student,
                subject,
            });
            await this.gradesRepository.save(grade);
            return grade;
        }
        catch (error) {
            this.exceptionService.handleDBExceptions(error);
        }
    }
    async findAll() {
        try {
            return this.gradesRepository.find({ relations: ['student', 'subject'] });
        }
        catch (error) {
            this.exceptionService.handleDBExceptions(error);
        }
    }
    async findOne(id) {
        const grade = await this.gradesRepository.findOne({
            where: { id },
            relations: ['student', 'subject'],
        });
        if (!grade)
            this.exceptionService.throwNotFound("Grade", id);
        return grade;
    }
    async findByStudent(studentId) {
        const grade = await this.gradesRepository.find({
            where: { student: { id: studentId } },
            relations: ['subject'],
        });
        if (!grade)
            throw new common_1.NotFoundException(`Grade with studen ID ${studentId} not found`);
        return grade;
    }
    async findBySubject(subjectId) {
        const grade = await this.gradesRepository.find({
            where: { subject: { id: subjectId } },
            relations: ['student'],
        });
        if (!grade)
            throw new common_1.NotFoundException(`Grade with subject ID ${subjectId} not found`);
        return grade;
    }
    async update(id, updateGradeDto) {
        const grade = await this.gradesRepository.preload({
            id,
            ...updateGradeDto,
        });
        if (!grade)
            this.exceptionService.throwNotFound("Grade", id);
        try {
            return this.gradesRepository.save(grade);
        }
        catch (error) {
            this.exceptionService.handleDBExceptions(error);
        }
    }
    async remove(id) {
        const grade = await this.findOne(id);
        await this.gradesRepository.remove(grade);
    }
};
exports.GradesService = GradesService;
exports.GradesService = GradesService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, typeorm_1.InjectRepository)(grade_entity_1.Grade)),
    __metadata("design:paramtypes", [typeorm_2.Repository,
        students_service_1.StudentsService,
        subjects_service_1.SubjectsService,
        exception_service_1.ExceptionService])
], GradesService);
//# sourceMappingURL=grades.service.js.map