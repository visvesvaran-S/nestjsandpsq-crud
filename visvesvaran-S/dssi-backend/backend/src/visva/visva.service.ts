import { Inject, Injectable, NotFoundException } from '@nestjs/common';
import { CreateVisvaDto } from './dto/create-visva.dto';
import { UpdateVisvaDto } from './dto/update-visva.dto';
import { Repository } from 'typeorm';
import { Visva } from 'src/visva/entities/visva.entity';
import { InjectRepository } from '@nestjs/typeorm';

@Injectable()
export class VisvaService {

constructor( 
  @InjectRepository(Visva)
  private readonly visvaRespositiory:Repository <Visva>){

}

  async create(createVisvaDto: CreateVisvaDto) {
    const visva = this.visvaRespositiory.create(createVisvaDto)

    return await this.visvaRespositiory.save(visva);
  }

   async findAll() {
    return await this.visvaRespositiory.find()
  }

 async  findOne(id: number) {

    return await this.visvaRespositiory.findOne({
      where:{id}
    });
  }

  async update(id: number, updateVisvaDto: UpdateVisvaDto) {
   
   const visva = await this.findOne(id);
   if(!visva){
    throw new NotFoundException()
   }
 Object.assign(visva,updateVisvaDto)

    return await this.visvaRespositiory.save(visva);
  }

  async remove(id: number) {
    const visva = await this.findOne(id);
   if(!visva){
    throw new NotFoundException()
   }

    return await this.visvaRespositiory.remove(visva);
  }
}
