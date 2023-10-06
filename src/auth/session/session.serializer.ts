import { Injectable } from "@nestjs/common";
import { PassportSerializer } from "@nestjs/passport";

@Injectable() 
export class SessionSerializer extends PassportSerializer{
  serializeUser(user: any, done: (err: Error, user: any) => void): any {
    done(null, user);// error back pattern
    // only id o amra save rakhte pari .. size small rakhar jonno
    // done(null, {id: user.id});
    // amra session e user ta kivabe save korte chai .. 
    // local.strategy.ts theke jei user ta ashbe .. sheta 
  }
  deserializeUser(payload: any, done: (err: Error, payload: string) => void):any {
    // jodi shudhu id session e save rakhi .. taile amake ekhane userService er help 
    // niye id er maddhome full user object ta ke khuje ber korte hobe .. 
    // then sheta ke return korte hobe .. 
    done(null, payload);
  }
}