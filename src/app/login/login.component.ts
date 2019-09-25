import { Component, OnInit } from '@angular/core';
import { RouterModule , Router } from '@angular/router';
import { MyserviceService } from '../myservice.service';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(private routes : Router, private service : MyserviceService) { }
  msg="";
  ngOnInit() {
  }
  check(uname: string, p : string)
  {
    var output = this.service.checkusernameandpassword(uname, p);
    if(output == true)
    {
      this.routes.navigate(['/dashboard']);
    }
    else{
this.msg ='Invalid username or password';
    }
  }
}
