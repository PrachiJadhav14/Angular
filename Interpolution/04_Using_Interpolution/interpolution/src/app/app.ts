import { Component, signal } from '@angular/core';
import { Usingdatefunction } from "./usingdatefunction/usingdatefunction";
@Component({
  selector: 'app-root',
  imports: [Usingdatefunction],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('interpolution');
}
