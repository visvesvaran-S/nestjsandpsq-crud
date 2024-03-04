import { Injectable, NotFoundException } from '@nestjs/common';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { User } from './entities/user.entity';
import { Repository } from 'typeorm';

@Injectable()
export class UserService {
  constructor(
    @InjectRepository(User)
    private readonly userRepository:Repository<User>
  ){}

   async create(createUserDto: CreateUserDto) {
  const user = this.userRepository.create(createUserDto)
  console.log(user,"line23");
  
    return  this.userRepository.save(user);
  }

   async findAll() {
    return await this.userRepository.find();
  }

  
  async findUserByEmail(email:string) {
    return await this.userRepository.findOne({where:{email}}) ;
  }
 
  async remove(id: number) {
  
    return await this.userRepository.delete(id);
  }
}
