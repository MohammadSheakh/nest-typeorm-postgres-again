import { CanActivate, ExecutionContext, Injectable } from "@nestjs/common";

// custom guard banaite chaile CanActivate interface implement korte hobe
@Injectable()
export class AuthenticatedGuard implements CanActivate{
  async canActivate(context : ExecutionContext){
    const requst = context.switchToHttp().getRequest();
    return requst.isAuthenticated();
  }
}
/** 
 * guards are in between requst and actual handling of that requst . 
 * so, its able to kind of intercept .. whats happening with that requst 
 * and kind of do some initial logic before it goes to the handler .. 
 * 
 * in this case .. we are just grabbing that request from the context ..
 * and we are checking if its authenticated .. 
 * 
 * and this is actually something ..that comes from passport automatically
 * which is what is gonna do, is assuming you did set up sessions.. 
 * 
 * its gonna try and looked for the session.. and say does the session 
 * exist for this user .. if so, keep going .. so, if there is any 
 * existing session for the user .. this is going to return true ..
 * 
 * and its gonna allow the requst to keep going down .. to the handler ..
 */