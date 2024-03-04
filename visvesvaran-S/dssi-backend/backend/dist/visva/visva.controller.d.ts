import { VisvaService } from './visva.service';
import { CreateVisvaDto } from './dto/create-visva.dto';
import { UpdateVisvaDto } from './dto/update-visva.dto';
export declare class VisvaController {
    private readonly visvaService;
    constructor(visvaService: VisvaService);
    create(createVisvaDto: CreateVisvaDto): Promise<import("./entities/visva.entity").Visva>;
    findAll(): Promise<import("./entities/visva.entity").Visva[]>;
    findOne(id: string): Promise<import("./entities/visva.entity").Visva>;
    update(id: string, updateVisvaDto: UpdateVisvaDto): Promise<import("./entities/visva.entity").Visva>;
    remove(id: string): Promise<import("./entities/visva.entity").Visva>;
}
