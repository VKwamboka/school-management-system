import { Injectable } from '@angular/core';
import { Student } from './Interface';

@Injectable({
  providedIn: 'root'
})
export class StudentService {
private students:Student[]=[{
  name:"Vera Doe",
  regNo:"001",
  balance:200,
  image:"https://images.unsplash.com/photo-1592188657297-c6473609e988?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8M3x8c3R1ZGVudHxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60"
}]

  constructor() { }

  getStudents(){
    return this.students
  }
}
