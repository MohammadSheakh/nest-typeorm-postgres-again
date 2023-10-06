import {  Module } from '@nestjs/common';
import { AuthService } from './auth.service';
import { UserModule } from 'src/user/user.module';
import { PassportModule } from '@nestjs/passport';
import { LocalStrategy } from './local.strategy';
import { SessionSerializer } from './session/session.serializer';

@Module({
  // like we said , we are going to use/utilize user service 
  // as we just created 
  imports: [UserModule, PassportModule.register({session:true})], // session is false by default
  providers: [AuthService, LocalStrategy, SessionSerializer] 
  // strategy jehetu injectable .. so , register korte hobe 
})
export class AuthModule {}
