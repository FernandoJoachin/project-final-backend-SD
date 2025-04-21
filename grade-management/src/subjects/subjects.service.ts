import { BadRequestException, Injectable, InternalServerErrorException, NotFoundException } from '@nestjs/common';
import { CreateSubjectDto } from './dto/create-subject.dto';
import { UpdateSubjectDto } from './dto/update-subject.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { Subject } from './entities/subject.entity';
import { Repository } from 'typeorm';
import { ExceptionService } from 'src/common/exception.service';

@Injectable()
export class SubjectsService {
  constructor(
    @InjectRepository(Subject)
    private readonly subjectsRepository : Repository<Subject>,
    private readonly exceptionService: ExceptionService
  ){}
  
  async create(createSubjectDto: CreateSubjectDto) {
    try {
      const subject = this.subjectsRepository.create(createSubjectDto);
      await this.subjectsRepository.save(subject);

      return subject;
    } catch (error) {
      this.exceptionService.handleDBExceptions(error);
    }
  }

  async findAll() {
    try {
      return this.subjectsRepository.find();
    } catch (error) {
      this.exceptionService.handleDBExceptions(error);
    }
  }

  async findOne(id: string) {
    const subject = await this.subjectsRepository.findOneBy({ id });
    if(!subject) this.exceptionService.throwNotFound("Subject", id); 

    return subject; 
  }

  async update(id: string, updateSubjectDto: UpdateSubjectDto) {
    const subject = await this.subjectsRepository.preload({
      id,
      ...updateSubjectDto,
    });
    
    if (!subject) this.exceptionService.throwNotFound("Subject", id);
    
    try {
      return this.subjectsRepository.save(subject);
    } catch (error) {
      this.exceptionService.handleDBExceptions(error);
    }
  }

  async remove(id: string) {
    const subject = await this.findOne(id);
    await this.subjectsRepository.remove(subject);
  }
}
