import { CreateSubjectDto } from './dto/create-subject.dto';
import { UpdateSubjectDto } from './dto/update-subject.dto';
import { Subject } from './entities/subject.entity';
import { Repository } from 'typeorm';
import { ExceptionService } from 'src/common/exception.service';
export declare class SubjectsService {
    private readonly subjectsRepository;
    private readonly exceptionService;
    constructor(subjectsRepository: Repository<Subject>, exceptionService: ExceptionService);
    create(createSubjectDto: CreateSubjectDto): Promise<Subject>;
    findAll(): Promise<Subject[]>;
    findOne(id: string): Promise<Subject>;
    update(id: string, updateSubjectDto: UpdateSubjectDto): Promise<Subject>;
    remove(id: string): Promise<void>;
}
