import { Injectable, UnauthorizedException } from "@nestjs/common";
import { PassportStrategy } from "@nestjs/passport";
import { Strategy } from "passport-local";
import { AuthService } from "./auth.service";

// from nest js prespective its gonna be provider 
@Injectable()
export class LocalStrategy extends PassportStrategy(Strategy){ // we need to pass in the actual strategy 
  // strategy form passport which is a local one 
  // this is , where we are gonna using auth service
  constructor(
    private authService: AuthService
  ){
    super(); // we need to call super()
    // if strategy require other configuration options ,
    // you can pass them in the super() method
    // 🟢object pass korte hobe .. super() er moddhe 
  }

  async validate(username: string , password: string): Promise<any>{
    const user = await this.authService.validateUser(username , password);

    if(!user){
      throw new UnauthorizedException();
    }
    return user;
    // passport will save the user in requst.user
  }
}
