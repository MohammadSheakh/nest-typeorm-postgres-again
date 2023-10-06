import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import * as session from 'express-session';
import * as passport from 'passport';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  
  // ekhane session configure korbo 

  // form express session documentation .. 
  app.use(session({
    secret : 'keyboard cat', // get env vars for this 
    resave : false,
    saveUninitialized : false,
    cookie : {maxAge : 3600000}
  }),
  // production e redis / database use korte hobe ..
  // in memory save kora jabe na .. 
  );

  // passport er shathe session use korle nicher duita line lagbe .. 
  app.use(passport.initialize())
  app.use(passport.session())

  await app.listen(3000);
}
bootstrap();
