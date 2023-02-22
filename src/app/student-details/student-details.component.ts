import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Student } from '../Interface';
import { StudentService } from '../student.service';

@Component({
  selector: 'app-student-details',
  templateUrl: './student-details.component.html',
  styleUrls: ['./student-details.component.css']
})
export class StudentDetailsComponent implements OnInit{
  form!: FormGroup;
  // data:{name:string, course:string, fee:string, balance:string}[]=[]

  // @Output() sendData = new EventEmitter<{name:string, course:string, fee:string, balance:string}>
  //  AddStudent(name:HTMLInputElement, course:HTMLInputElement, fee:HTMLInputElement, balance:HTMLInputElement){
  //   this.sendData.emit({name: name.value, course: course.value, fee: fee.value, balance: balance.value})

  // }

  // send data to service
  constructor(private fb:FormBuilder, private studentService:StudentService){
    
  }
  ngOnInit(): void {
    this.form = this.fb.group({
      name:[null,[Validators.required]],
      regNo:[null,[Validators.required]],
      image:[null,[Validators.required]]
    })
  }

  // sendData(student:Student){
  //   let student:Student = (...this.form.value ,addStudent)
  // }
}
