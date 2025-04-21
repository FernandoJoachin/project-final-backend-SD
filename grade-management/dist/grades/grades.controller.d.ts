import { GradesService } from './grades.service';
import { CreateGradeDto } from './dto/create-grade.dto';
import { UpdateGradeDto } from './dto/update-grade.dto';
import { Grade } from './entities/grade.entity';
export declare class GradesController {
    private readonly gradesService;
    constructor(gradesService: GradesService);
    create(createGradeDto: CreateGradeDto): Promise<Grade>;
    findAll(): Promise<Grade[]>;
    findOne(id: string): Promise<Grade>;
    update(id: string, updateGradeDto: UpdateGradeDto): Promise<Grade>;
    remove(id: string): Promise<void>;
}
