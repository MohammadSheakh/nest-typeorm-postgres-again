import { ConfigurableModuleBuilder, Module, forwardRef } from '@nestjs/common';

import { FeedbackModule } from './feedback/feedback.module';
import { TypeOrmModule } from '@nestjs/typeorm';
import config from '../ormconfig';
import { RouterModule } from '@nestjs/core';
import { ConfigModule } from '@nestjs/config';
import { UserModule } from './user/user.module';
import { AuthModule } from './auth/auth.module';
import { UserService } from './user/user.service';
import { AuthService } from './auth/auth.service';

@Module({
  imports: [
    TypeOrmModule.forRoot(config),
    FeedbackModule,
    forwardRef(() => UserModule), // forwardRef() is used to avoid circular dependency
    //UserModule,
    RouterModule.register([
      {
        path:'api/feedbacks', // amader shob gula api shuru hobe ei ta diye 
        module : FeedbackModule
      },
      {
        path:'api/users', // amader shob gula api shuru hobe ei ta diye 
        module : UserModule
      }
    ]),
    ConfigModule.forRoot({ // may be for env variable
      isGlobal:true
    }),
    UserModule,
    AuthModule
  ],
  // providers: [UserService], // bujhi nai 😢
  
})
export class AppModule {}
