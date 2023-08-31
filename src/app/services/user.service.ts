import { Injectable } from '@angular/core';
import { BaseService } from './base.service';

@Injectable({
  providedIn: 'root'
})
export class UserService extends BaseService {
  public user:any;
  
  constructor(private base:BaseService) {
    super(base.http);
   }

   public createAccount(userObj:any) {
    //console.log("calisti1");
    
    return this.postReq('users', userObj);
    //console.log("calisti2");
   }
   public getUser(email:string) {
   
    
    return this.getReq("users?email=" +email)
   
    
   }
}
