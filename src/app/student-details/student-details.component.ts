import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-student-details',
  templateUrl: './student-details.component.html',
  styleUrls: ['./student-details.component.css']
})
export class StudentDetailsComponent {
  // data:{name:string, course:string, fee:string, balance:string}[]=[]

  @Output() sendData = new EventEmitter<{name:string, course:string, fee:string, balance:string}>
   AddStudent(name:HTMLInputElement, course:HTMLInputElement, fee:HTMLInputElement, balance:HTMLInputElement){
    this.sendData.emit({name: name.value, course: course.value, fee: fee.value, balance: balance.value})

  }
}
