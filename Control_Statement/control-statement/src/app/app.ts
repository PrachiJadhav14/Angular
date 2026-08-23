import { parseHostBindings } from '@angular/compiler';
import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Switch } from "./switch/switch";
import { ForLoop } from "./for-loop/for-loop";


@Component({
  selector: 'app-root',
  imports: [Switch, ForLoop],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('control-statement');

  display = false;
  x = 10;
  toggleDivs = true;

  Hide(){
   this.display  = false
  }
  Show(){
    this.display = true;
  }
  Toggle(){
     this.display = !this.display;
  }
  ToggleTwodiv(){
          this.toggleDivs = !this.toggleDivs;
  }

  color = 3;

  handlecolor(value : number){
    this.color = value;
  }
    handleevent(event : Event){
    this.color = parseInt((event.target as HTMLInputElement).value);
    }





}
