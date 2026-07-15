import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  imports: [],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('get-set-methos');
  name = "";
  displayName = "";
  email = "";
  getName(event:Event){
    this.name = (event. target as HTMLInputElement).value;

    }
     showname(){
      this.displayName = this.name;
  }
  setname(){
       this.name = "Saku";
  }

getEmail(val : string){
 console.log(val);
this.email = val;
this.email = "@2005gmail.com"

}
setEmail(){
  this.email = "defualt@gmail.com"
}
}

