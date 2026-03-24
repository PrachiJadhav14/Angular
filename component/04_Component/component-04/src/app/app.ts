import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet],
  templateUrl: './new page.html',
  // template: `<h1>Heloooooooo</h1>`,
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('component-04');
}
