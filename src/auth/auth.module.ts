import {  Module } from '@nestjs/common';
import  {AuthService}  from './auth.service';
import { UserModule } from 'src/user/user.module';
import { PassportModule } from '@nestjs/passport';
import { LocalStrategy } from './local.strategy';
import { SessionSerializer } from './session/session.serializer';
import { JwtModule, JwtService } from '@nestjs/jwt';
import { TypeOrmModule } from '@nestjs/typeorm';
import { User } from 'src/user/entities/user.entity';

@Module({
  // like we said , we are going to use/utilize user service 
  // as we just created 
  // egula 🔰 process.env te rakhte hobe .. 
  imports: [UserModule, PassportModule/*.register({session:true})*/, JwtModule.register({secret:'SECRET',signOptions:{expiresIn:'60s'}})], // session is false by default
  providers: [AuthService, LocalStrategy/*, SessionSerializer*/], 
  // strategy jehetu injectable .. so , register korte hobe 
  exports: [AuthService] // User Controller e use korbo 
})
export class AuthModule {} 
