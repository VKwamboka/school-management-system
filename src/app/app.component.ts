import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'assessment1';
  data:{name:string, course:string, fee:string, balance:string}[]=[{
    name:"Ann",
    course:"IT",
    fee: "40000",
    balance:"3000"
  }]
  
  AddStudent(event:{name:string, course:string, fee:string, balance:string}){
    this.data.push({name: event.name, course: event.course,  fee: event.fee, balance: event.balance })
  }
}
