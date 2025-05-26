import { BadRequestException, ConflictException, Injectable, InternalServerErrorException, Logger, NotFoundException } from '@nestjs/common';
import { CreateGradeDto } from './dto/create-grade.dto';
import { UpdateGradeDto } from './dto/update-grade.dto';
import { Grade } from './entities/grade.entity';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { StudentsService } from 'src/students/students.service';
import { SubjectsService } from 'src/subjects/subjects.service';
import { ExceptionService } from 'src/common/exception.service';

@Injectable()
export class GradesService {
  private readonly logger = new Logger('GradesService');
  
  constructor(
    @InjectRepository(Grade)
    private readonly gradesRepository : Repository<Grade>,
    private studentsService: StudentsService,
    private subjectsService: SubjectsService,
    private readonly exceptionService: ExceptionService
  ){}

  async create(createGradeDto: CreateGradeDto) {
    const { studentId, subjectId } = createGradeDto;

    const student = await this.studentsService.findOne(studentId);
    const subject = await this.subjectsService.findOne(subjectId);
    
    if (student.gradeLevel != subject.gradeLevel) {
      throw new ConflictException('The subject is not valid with respect to the student\'s grade level');
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
    } catch (error) {
      this.exceptionService.handleDBExceptions(error);
    }
  }

  async findAll() {
    try {
      return this.gradesRepository.find({ relations: ['student', 'subject'] });
    } catch (error) {
      this.exceptionService.handleDBExceptions(error);
    }
  }

  async findOne(id: string) {
    const grade = await this.gradesRepository.findOne({ 
      where: { id },
      relations: ['student', 'subject'],
    });

    if(!grade) this.exceptionService.throwNotFound("Grade", id);

    return grade; 
  }

  async findByStudent(studentId: string) {
    const grade = await this.gradesRepository.find({
      where: { student: { id: studentId } },
      relations: ['subject'],
    });

    if(!grade) 
      throw new NotFoundException(`Grade with studen ID ${studentId} not found`);

    return grade; 
  }

  async findBySubject(subjectId: string) {
    const grade = await this.gradesRepository.find({
      where: { subject: { id: subjectId } },
      relations: ['student'],
    });

    if(!grade) 
      throw new NotFoundException(`Grade with subject ID ${subjectId} not found`);

    return grade; 
  }

  async findEligibleSubjectsByStudent(studentId: string) {
    const student = await this.studentsService.findOne(studentId);
    
    if (!student) {
      this.exceptionService.throwNotFound('Student', studentId);
    }

    try {
      return this.subjectsService.findByGradeLevel(student.gradeLevel);
    } catch (error) {
      this.exceptionService.handleDBExceptions(error);
    }
  }

  async update(id: string, updateGradeDto: UpdateGradeDto) {
    const grade = await this.gradesRepository.preload({
      id,
      ...updateGradeDto,
    });
    
    if(!grade) this.exceptionService.throwNotFound("Grade", id);

    try {  
      return this.gradesRepository.save(grade);
    } catch (error) {
      this.exceptionService.handleDBExceptions(error);
    }
  }

  async remove(id: string) {
    const grade = await this.findOne(id);
    await this.gradesRepository.remove(grade);
  }
}