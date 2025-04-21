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
exports.StudentsService = void 0;
const common_1 = require("@nestjs/common");
const student_entity_1 = require("./entities/student.entity");
const typeorm_1 = require("typeorm");
const typeorm_2 = require("@nestjs/typeorm");
const exception_service_1 = require("../common/exception.service");
let StudentsService = class StudentsService {
    constructor(studentsRepository, exceptionService) {
        this.studentsRepository = studentsRepository;
        this.exceptionService = exceptionService;
    }
    async create(createStudentDto) {
        try {
            const student = this.studentsRepository.create(createStudentDto);
            await this.studentsRepository.save(student);
            return student;
        }
        catch (error) {
            this.exceptionService.handleDBExceptions(error);
        }
    }
    async findAll() {
        try {
            return this.studentsRepository.find();
        }
        catch (error) {
            this.exceptionService.handleDBExceptions(error);
        }
    }
    async findOne(id) {
        const student = await this.studentsRepository.findOneBy({ id });
        if (!student)
            this.exceptionService.throwNotFound("Student", id);
        return student;
    }
    async update(id, updateStudentDto) {
        const student = await this.studentsRepository.preload({
            id,
            ...updateStudentDto,
        });
        if (!student)
            this.exceptionService.throwNotFound("Student", id);
        try {
            return this.studentsRepository.save(student);
        }
        catch (error) {
            this.exceptionService.handleDBExceptions(error);
        }
    }
    async remove(id) {
        const student = await this.findOne(id);
        await this.studentsRepository.remove(student);
    }
};
exports.StudentsService = StudentsService;
exports.StudentsService = StudentsService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, typeorm_2.InjectRepository)(student_entity_1.Student)),
    __metadata("design:paramtypes", [typeorm_1.Repository,
        exception_service_1.ExceptionService])
], StudentsService);
//# sourceMappingURL=students.service.js.map