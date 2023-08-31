import { Component, OnInit } from '@angular/core';
import { UserService } from '../services/user.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  constructor ( public userservice:UserService, private route:Router) {}
  ngOnInit() {
    let str = localStorage.getItem('user');
    if(str != null){
      this.userservice.user = JSON.parse(str);
    }
    else {
      this.route.navigateByUrl('login');
    }
  }


  logout() {
    this.userservice.user = undefined;
    this.route.navigateByUrl('login');
  }

}
