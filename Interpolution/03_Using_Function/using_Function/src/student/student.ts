import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';


@Component({
  selector: 'app-student',
  
  templateUrl: './student.html',
  // template:`<h1>Hello</h1>`,
  styleUrl: './student.css',
  // styles:`h1{
  //   background-color: aqua;
  //   color: white;
  // }`,
  standalone:true,
  imports: [CommonModule]
})
export class Student {
       name:string='Prachi Jadhav';
       marks: number=1455;

       showmessage(){
            alert("welcome To My Angular Website");
       }

      }