import { Component, signal } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Demo } from "./demo/demo";

@Component({
  selector: 'app-root',
  imports: [FormsModule, Demo],
  templateUrl: './app.html',
  styleUrl: './app.css',


})
export class App {
  protected readonly title = signal('Event_Binding');
  name : string = 'Angular';
  FirstName : string = 'Pr achi';
  LastName :string = 'Jadhav';

  price : number = 100;
  quantity :number = 150;

  age : number = 78;

  getMessage(){
    return "Welcome Interpolution Methid";
  }
/////One Way Binding
  changeNameI(){
    this.FirstName= "Anushri";
    this.LastName = "Patil"
  }
  showmessage(){
    alert("Event Binding Triggered");
  }

////Two Way Binding

SFirst_Name :string = 'Sneha';
SLast_Name : String  = 'Patil';

  pname = 'Prachii'

  imgUrl = 'https://img.freepik.com/free-photo/coding-man_1098-18084.jpg?semt=ais_hybrid&w=740&q=80';

  isDisabled :boolean = true;
  // isDisabled :boolean = false;
}
