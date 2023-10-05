import { Module } from '@nestjs/common';
import { AuthService } from './auth.service';
import { UserModule } from 'src/user/user.module';

@Module({
  // like we said , we are going to use/utilize user service 
  // as we just created 
  imports: [UserModule],
  providers: [AuthService]
})
export class AuthModule {}
