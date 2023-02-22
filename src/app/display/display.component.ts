import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Student } from '../Interface';
import { StudentService } from '../student.service';

@Component({
  selector: 'app-display',
  templateUrl: './display.component.html',
  styleUrls: ['./display.component.css']
})
export class DisplayComponent implements OnInit{
// @Input() data!:{name:string, course:string, fee:string, balance:string}[]
@Output() sendData = new EventEmitter<{reg:string}>()

students:Student[]=[]
constructor(private studentService:StudentService){
  this.students = this.studentService.getStudents()
}

ngOnInit(): void {
  
}
// nodata=""
OnUpdate(reg:string){
this.sendData.emit({reg})
}
}
