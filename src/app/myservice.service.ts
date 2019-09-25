import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class MyserviceService {

  constructor() { }
  checkusernameandpassword(uname:String,pwd:String)
  {
    if(uname=="admin"&&pwd=="1234")
    {
      localStorage.setItem("username","admin")
      return true;
    }
    else{
      return false;
    }

  }
}
