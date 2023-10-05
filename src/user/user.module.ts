import { Module } from '@nestjs/common';
import { UserService } from './user.service';
import { UserController } from './user.controller';
import { User } from './entities/user.entity';
import { TypeOrmModule } from '@nestjs/typeorm';

@Module({
  // entity ta register korte hobe
  imports: [TypeOrmModule.forFeature([User])], // it takes in array of entities
  controllers: [UserController],
  providers: [UserService],
})
export class UserModule {}
