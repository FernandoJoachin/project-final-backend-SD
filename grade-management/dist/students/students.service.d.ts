import { CreateStudentDto } from './dto/create-student.dto';
import { UpdateStudentDto } from './dto/update-student.dto';
import { Student } from './entities/student.entity';
import { Repository } from 'typeorm';
import { ExceptionService } from 'src/common/exception.service';
export declare class StudentsService {
    private readonly studentsRepository;
    private readonly exceptionService;
    constructor(studentsRepository: Repository<Student>, exceptionService: ExceptionService);
    create(createStudentDto: CreateStudentDto): Promise<Student>;
    findAll(): Promise<Student[]>;
    findOne(id: string): Promise<Student>;
    update(id: string, updateStudentDto: UpdateStudentDto): Promise<Student>;
    remove(id: string): Promise<void>;
}
