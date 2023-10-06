import { Injectable } from '@nestjs/common';
import { UserService } from 'src/user/user.service';
import { JwtService } from '@nestjs/jwt';

// now a service is something that you can inject 
// into this auth service via constructor just like any other service 
@Injectable()
export class AuthService {
  // ekhane amra userService ta use korbo 
  constructor(
    // constructor allow us to inject that 
    private usersService : UserService,
    private jwtService :  JwtService
  ){}  

  // now what we need to add here is a validateUser method
  
  // may be for Session ! i dont know
  async validateUser(username:string, password: string):Promise<any>{
    const user = await this.usersService.findOnedummyUser(username)

    if(user && user.password === password){
      const {password, username, ...rest} = user;
      return rest; // password is matched
      // rest just contains id and name  
    }
    return null; // password is not matched
  }

  // we are gonna create new login method  // JWT 
  async login(user:any){
    // what we are gonna do here is we are gonna generate a JWT token
    // and we are gonna return that to the client

    // create a payload .. that has information that we want to save in JWT
    const payload  = {name : user.name, sub: user.id};
    // sub -> subject .. who is this token about ..

    return {
      accessToken : this.jwtService.sign(payload),

    }

  }
}

// auth module e JWT module ta register korte hobe .. 
// jehetu login method amra authService e add korsi .. 
// amra sheta utilize korbo User Controller e .. 
// so, auth service ta auth module theke export korte hobe .. 