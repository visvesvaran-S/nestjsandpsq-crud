import { PartialType } from '@nestjs/mapped-types';
import { CreateVisvaDto } from './create-visva.dto';

export class UpdateVisvaDto extends PartialType(CreateVisvaDto) {}
