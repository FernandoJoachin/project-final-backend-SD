import { BadRequestException, Injectable, InternalServerErrorException, NotFoundException } from '@nestjs/common';
import { CreateStudentDto } from './dto/create-student.dto';
import { UpdateStudentDto } from './dto/update-student.dto';
import { Student } from './entities/student.entity';
import { Repository } from 'typeorm';
import { InjectRepository } from '@nestjs/typeorm';
import { ExceptionService } from 'src/common/exception.service';

@Injectable()
export class StudentsService {
  constructor(
    @InjectRepository(Student)
    private readonly studentsRepository : Repository<Student>,
    private readonly exceptionService: ExceptionService
  ){}

  async create(createStudentDto: CreateStudentDto) {
    try {
      const student = this.studentsRepository.create(createStudentDto);
      await this.studentsRepository.save(student);

      return student;
    } catch (error) {
      this.exceptionService.handleDBExceptions(error);
    }
  }

  async findAll() {
    try {
      return this.studentsRepository.find();
    } catch (error) {
      this.exceptionService.handleDBExceptions(error);
    }
  }

  async findOne(id: string) {
    const student = await this.studentsRepository.findOneBy({ id });
    if(!student) this.exceptionService.throwNotFound("Student", id);

    return student; 
  }

  async update(id: string, updateStudentDto: UpdateStudentDto) {
    const student = await this.studentsRepository.preload({
      id,
      ...updateStudentDto,
    });
    
    if(!student) this.exceptionService.throwNotFound("Student", id);
    
    try {  
      return this.studentsRepository.save(student);
    } catch (error) {
      this.exceptionService.handleDBExceptions(error);
    }
  }

  async remove(id: string) {
    const student = await this.findOne(id);
    await this.studentsRepository.remove(student);
  }
}
