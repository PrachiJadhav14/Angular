import { Component } from '@angular/core';
import { provideRoutes, RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-basic',
  imports: [],

//   template:`<h1>This is Child Component</h1>
// <h3>This is My Information</h3>
// <p>Name : {{name}}</p>
// <p>Mark: {{marks}}</p>
// <button (click)="showMessage()">Click Me</button>`,

   templateUrl: './basic.html',
  styleUrl: './basic.css',
  // styles : [`
  //   h1{
  //     color : blue;
  //     font-weight: bold;
  //   }`]
  standalone : true,
  // providers:[DatePipe]
})
export class Basic {
name : string = "Prachi Jadhav";
marks : number=98;
// liveDate :any;


showMessage(){
  alert("In Basic Component Button Clicked");
}
// show(){
//   this.liveDate = this.date.trasforms(new Date(),'dd-MM-yyy');
// }
}
