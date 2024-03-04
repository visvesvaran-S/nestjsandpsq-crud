import { Module } from '@nestjs/common';
import { VisvaService } from './visva.service';
import { VisvaController } from './visva.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Visva } from 'src/visva/entities/visva.entity'

@Module({
  imports: [TypeOrmModule.forFeature([Visva])],
  controllers: [VisvaController],
  providers: [VisvaService],
})
export class VisvaModule {}
