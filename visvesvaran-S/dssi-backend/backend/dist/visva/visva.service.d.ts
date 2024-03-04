import { CreateVisvaDto } from './dto/create-visva.dto';
import { UpdateVisvaDto } from './dto/update-visva.dto';
import { Repository } from 'typeorm';
import { Visva } from 'src/visva/entities/visva.entity';
export declare class VisvaService {
    private readonly visvaRespositiory;
    constructor(visvaRespositiory: Repository<Visva>);
    create(createVisvaDto: CreateVisvaDto): Promise<Visva>;
    findAll(): Promise<Visva[]>;
    findOne(id: number): Promise<Visva>;
    update(id: number, updateVisvaDto: UpdateVisvaDto): Promise<Visva>;
    remove(id: number): Promise<Visva>;
}
