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
exports.SubjectsService = void 0;
const common_1 = require("@nestjs/common");
const typeorm_1 = require("@nestjs/typeorm");
const subject_entity_1 = require("./entities/subject.entity");
const typeorm_2 = require("typeorm");
const exception_service_1 = require("../common/exception.service");
let SubjectsService = class SubjectsService {
    constructor(subjectsRepository, exceptionService) {
        this.subjectsRepository = subjectsRepository;
        this.exceptionService = exceptionService;
    }
    async create(createSubjectDto) {
        try {
            const subject = this.subjectsRepository.create(createSubjectDto);
            await this.subjectsRepository.save(subject);
            return subject;
        }
        catch (error) {
            this.exceptionService.handleDBExceptions(error);
        }
    }
    async findAll() {
        try {
            return this.subjectsRepository.find();
        }
        catch (error) {
            this.exceptionService.handleDBExceptions(error);
        }
    }
    async findOne(id) {
        const subject = await this.subjectsRepository.findOneBy({ id });
        if (!subject)
            this.exceptionService.throwNotFound("Subject", id);
        return subject;
    }
    async update(id, updateSubjectDto) {
        const subject = await this.subjectsRepository.preload({
            id,
            ...updateSubjectDto,
        });
        if (!subject)
            this.exceptionService.throwNotFound("Subject", id);
        try {
            return this.subjectsRepository.save(subject);
        }
        catch (error) {
            this.exceptionService.handleDBExceptions(error);
        }
    }
    async remove(id) {
        const subject = await this.findOne(id);
        await this.subjectsRepository.remove(subject);
    }
};
exports.SubjectsService = SubjectsService;
exports.SubjectsService = SubjectsService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, typeorm_1.InjectRepository)(subject_entity_1.Subject)),
    __metadata("design:paramtypes", [typeorm_2.Repository,
        exception_service_1.ExceptionService])
], SubjectsService);
//# sourceMappingURL=subjects.service.js.map