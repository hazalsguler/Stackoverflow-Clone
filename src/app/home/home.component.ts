import { Component, OnInit } from '@angular/core';
import { QuestionService } from '../services/question.service';
import { UserService } from '../services/user.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  
  question: string = '';
  questionList:Array<any> = [];

  ngOnInit(): void {
    this.questionService.getQuestions().subscribe((res)=>{
      console.log(res);
      this.questionList = res;
      
    })
  }

  constructor( public questionService:QuestionService, public userservice:UserService) {}


  post() {
    this.questionService.postQuestions({
      username:this.userservice.user.username,
      question:this.question,
      solutions:[ 1]
    }).subscribe((res)=>{
      //console.log(res);
      this.questionList.push(res);
      
    })
  }


 

}
