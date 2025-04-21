import { SubjectsService } from './subjects.service';
import { CreateSubjectDto } from './dto/create-subject.dto';
import { UpdateSubjectDto } from './dto/update-subject.dto';
import { Subject } from './entities/subject.entity';
export declare class SubjectsController {
    private readonly subjectsService;
    constructor(subjectsService: SubjectsService);
    create(createSubjectDto: CreateSubjectDto): Promise<Subject>;
    findAll(): Promise<Subject[]>;
    findOne(id: string): Promise<Subject>;
    update(id: string, updateSubjectDto: UpdateSubjectDto): Promise<Subject>;
    remove(id: string): Promise<void>;
}
