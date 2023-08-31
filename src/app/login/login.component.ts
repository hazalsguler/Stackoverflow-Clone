import { Component, OnInit } from '@angular/core';
import { AbstractControl, FormBuilder, Validators } from '@angular/forms';
import { UserService } from '../services/user.service';
import { MatSnackBar, MatSnackBarModule } from '@angular/material/snack-bar';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(private fb:FormBuilder, public userservice:UserService, private matsnack:MatSnackBar, private route:Router) {}

  ngOnInit() {

  }

  loginForm = this.fb.group({
    email:['',[Validators.required]],
    password:['',[Validators.required]]
  })

  get f(): {[key: string]: AbstractControl} {
    return this.loginForm.controls;
  }
  login() {
    //console.log("calisti5");
    if(this.loginForm.value.email) {
      //console.log("calisti7");
      this.userservice.getUser(this.loginForm.value.email).subscribe((res)=>{
        //console.log("calisti8");
        console.log(res);
        
      if(res.length === 0){

        this.matsnack.open('Böyle bir hesap bulunamadı !', 'Ok');
      }
      else {
        if(res[0].password === this.loginForm.value.password) {
          this.userservice.user = res[0];
          localStorage.setItem('user', JSON.stringify(res[0]));
          this.route.navigateByUrl('home');
        }
        else {
          this.matsnack.open("Yanlış Şifre","Ok");
        }

      
    }
      })}

    }
  
}
