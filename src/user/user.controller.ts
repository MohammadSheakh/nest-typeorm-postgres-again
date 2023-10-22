import { Controller, Get, Post, Body, Patch, Param, Delete, UseGuards, Request, Inject } from '@nestjs/common';
import { UserService } from './user.service';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { LocalAuthGuard } from 'src/auth/local-auth.guard';
import { AuthenticatedGuard } from 'src/auth/session/authenticated.guard';
import { AuthService } from 'src/auth/auth.service';

@Controller('user')
export class UserController {
  constructor(
    private readonly userService: UserService,  
    private readonly authService: AuthService) {}

  // Passport invoke korbo kono ekta vabe .. 
  // we are going to be doing this by utilizing guards in nest js 
  // we need to have guads that says.. if the user not logged in trigger
  // this entire authentication flow .. 
  //@UseGuards(LocalAuthGuard)
  @Post('loginWithJWT')
  loginWithJWT(@Request() req:any):any{
    // ⏭️🔰 TODO : return JWT access token // ✅✔️Done
    console.log("===================Controller=======================================")
    
    return this.authService.login(req);
     //return this.userService.login(req);
    
  }


  @UseGuards(LocalAuthGuard)
  @Post('login')
  login(@Request() req:any):any{
    return this.userService.login(req);
    //return req.user; // from passport 
  }
  /*
    login data ... 
    //🔗http://localhost:3000/api/users/user/login [post]
    {
      "username": "sheakh",
      "password": "12345"
    }
  */
    /**
     * 1. kono requst er body ashle .. amra take LocalAuthGuard e send kortesi 
     * 2. sheta hit kortese local.strategy.ts ke .. 
     * 3. eventually it will run validate function with username and password
     * 4. that called validateUser function from auth.service.ts
     * 5. in passport will save the user in requst.user
     */


    /**
     * now we got the logged in user .. 
     * how can we protect this protected route
     * one way : session .. when the user logs in .. we can store the req.user in session
     * session ta kothao store kora lagbe .. like redis .. ekhon amra abar stateless rakhte chai 
     * so , JWT..
     * session are secure .. JWT te validate korte hoy token .. 
     */
    /**
     * session
     * new guard create korbo .. jeta check korbe .. ekta requst er jonno
     * session ase kina .. 
     */
  @UseGuards(AuthenticatedGuard) //🟢 for session.. 
  // as we didnt setup session yet .. so, i expect it to always fail at this point 
  // it returns 403 status -> Forbidden resouce .. bcz, user is not logged in 
  // 🔃 npm i express-session 
  @Get('protected')
  getHello(@Request() req : any):string | object {
    return this.userService.getHello(req.user);
  }



  

  @Get('jwt')
  getHelloWithJWT(@Request() req : any):string | object {
    // ⏭️🔰 TODO : require an bearer token, make sure that token is valid 
   
    return this.userService.getHello(req.user);
  }

  @Post()
  create(@Body() createUserDto: CreateUserDto) {
    return this.userService.create(createUserDto);
  }

  @Get()
  findAll() {
    return this.userService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.userService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateUserDto: UpdateUserDto) {
    return this.userService.update(+id, updateUserDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.userService.remove(+id);
  }

  
}
