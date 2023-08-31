import { Component, OnInit } from '@angular/core';
import { AbstractControl, FormBuilder, Validators } from '@angular/forms';
import { UserService } from '../services/user.service';

@Component({
  selector: 'app-create-user',
  templateUrl: './create-user.component.html',
  styleUrls: ['./create-user.component.css']
})
export class CreateUserComponent implements OnInit {

  constructor(private fb:FormBuilder, public userservice:UserService) {}
  ngOnInit() {

  }
  createForm = this.fb.group({
    email:['',Validators.required],
    username:['',Validators.required],
    password:['',Validators.required]
  })
  
  get f(): {[key: string]: AbstractControl} {
    return this.createForm.controls;
  }
  createAccount() {
    //console.log("calisti3");
    
    this.userservice.createAccount(this.createForm.value).subscribe((res)=>{
      //console.log("calisti4");
      console.log(res);

    })
  }

}
