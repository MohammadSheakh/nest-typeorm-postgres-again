import { Module, forwardRef } from '@nestjs/common';
import { UserService } from './user.service';
import { UserController } from './user.controller';
import { User } from './entities/user.entity';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AuthModule } from 'src/auth/auth.module';

@Module({
  // entity ta register korte hobe
  imports: [TypeOrmModule.forFeature([User])], // it takes in array of entities
  controllers: [UserController],
  providers: [UserService],
  exports : [UserService]  // allow one module to used in other module  
  // authService e use hoise UserService ta ..
})
export class UserModule {}
