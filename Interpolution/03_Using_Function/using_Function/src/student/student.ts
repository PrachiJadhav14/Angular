import { CommonModule, DatePipe } from '@angular/common';
import { Component, inject, Injector } from '@angular/core';


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
  imports: [CommonModule],
  providers:[DatePipe]
})
export class Student {
       name:string='Prachi Jadhav';
       marks: number=1455;
      today = new Date();

      // constructor(private date : DatePipe){}

       date = inject(DatePipe)

       showmessage(){
            alert("welcome To My Angular Website");
       }


       transformedDate = this.date.transform(new Date(),'dd-MM-yyy');

      }
