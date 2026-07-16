import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  imports: [],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('Event_02');

  handleEvent(event:Event){
        console.log("function Called",event.type);
    // console.log("function Called",event.target);
    // console.log("function Called",(event.target as Element).className);
    console.log("value",(event.target as HTMLInputElement).value);

  }
}
