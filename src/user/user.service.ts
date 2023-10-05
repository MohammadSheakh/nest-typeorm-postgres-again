import { Injectable } from '@nestjs/common';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { User } from './entities/user.entity';
import { Repository } from 'typeorm';

@Injectable()
export class UserService {
  // inject our repository into the userService
  constructor(
    @InjectRepository(User) private usersRepository:Repository <User>
  ){}

  create(createUserDto: CreateUserDto) {
    const newUser = this.usersRepository.create(createUserDto);
    return this.usersRepository.save(newUser);
    // insert o use kora jabe ... but eta result return kore .. object return kore na 
    
  }

  findAll() {
    return this.usersRepository.find(); // select * from user
  }

  findOne(id: number) {
    // return this.usersRepository.find({
    //   where: { id },
    // });
    return this.usersRepository.findOneBy({ id });
    
  }

  async update(id: number, updateUserDto: UpdateUserDto) {

    // avoid korte chaile 
    // return this.usersRepository.update(id, updateUserDto); // but it does not return actual updated user .. it just return query result .. 

    // recommended way .... nich er ta .. 
    // find korte hobe first e .. 
    const user = await this.findOne(id);
    
    
    return this.usersRepository.save({...user, ...updateUserDto});
  }

  async remove(id: number) {
    // alternative way -> return this.usersRepository.delete(id); // but eita result return kore .. record return kore na .. 
    const user = await this.findOne(id);
    return this.usersRepository.remove(user); // deleted record ta return kore 
  }
}
