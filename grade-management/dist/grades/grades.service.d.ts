import { CreateGradeDto } from './dto/create-grade.dto';
import { UpdateGradeDto } from './dto/update-grade.dto';
import { Grade } from './entities/grade.entity';
import { Repository } from 'typeorm';
import { StudentsService } from 'src/students/students.service';
import { SubjectsService } from 'src/subjects/subjects.service';
import { ExceptionService } from 'src/common/exception.service';
export declare class GradesService {
    private readonly gradesRepository;
    private studentsService;
    private subjectsService;
    private readonly exceptionService;
    private readonly logger;
    constructor(gradesRepository: Repository<Grade>, studentsService: StudentsService, subjectsService: SubjectsService, exceptionService: ExceptionService);
    create(createGradeDto: CreateGradeDto): Promise<Grade>;
    findAll(): Promise<Grade[]>;
    findOne(id: string): Promise<Grade>;
    findByStudent(studentId: string): Promise<Grade[]>;
    findBySubject(subjectId: string): Promise<Grade[]>;
    update(id: string, updateGradeDto: UpdateGradeDto): Promise<Grade>;
    remove(id: string): Promise<void>;
}
