import { Injectable } from '@nestjs/common';
import { UserService } from 'src/user/user.service';

@Injectable()
export class AuthService {
  // ekhane amra userService ta use korbo 
  constructor(
    // constructor allow us to inject that 
    private usersService : UserService
  ){}  

  // now what we need to add here is a validateUser method
    
  async validateUser(username:string, password: string):Promise<any>{
    const user = await this.usersService.findOnedummyUser(username)

    if(user && user.password === password){
      const {password, username, ...rest} = user;
      return rest; // password is matched
      // rest just contains id and name  
    }
    return null; // password is not matched
  }

}
