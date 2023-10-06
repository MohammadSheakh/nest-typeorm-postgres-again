import { AuthGuard } from "@nestjs/passport";
import { Injectable, ExecutionContext } from "@nestjs/common";

@Injectable() // this class also needs to be provider
export class LocalAuthGuard extends AuthGuard('local') // provide name of your strategy // in our case local 
{
  // amra different strategy use korte pari .. like google, facebook
  // we still needs to tell this to trigger an actual login via creating a session

  async canActivate(context : ExecutionContext){
    const result = (await super.canActivate(context)) as boolean;
    const requst = context.switchToHttp().getRequest();

    await super.logIn(requst);
    return result;
  }
}
