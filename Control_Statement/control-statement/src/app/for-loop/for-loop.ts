import { Component } from '@angular/core';

@Component({
  selector: 'app-for-loop',
  imports: [],
  templateUrl: './for-loop.html',
  styleUrl: './for-loop.css',
})
export class ForLoop {

  Users = ["Ganesha","Prachi","Riyansha","Priyanshi",    "Chota Bheem"]
  students = [
      {name  : 'Aniket',age : 20, Email : '@yxzgamil.com'},
      {name  : 'Anisha',age : 22, Email : '@PEXgamil.com'},
      {name  : 'Anvi',age : 25, Email : '@yutgamil.com'},
      {name  : 'Ani',age : 210, Email : '@yxzhbgamil.com'},
  ]
 getname(name : string){
   console.log(name);
 }
 getage(age : number){
 console.log(age)
 }
 getemail(email : string){
   console.log(email)
 }
}
