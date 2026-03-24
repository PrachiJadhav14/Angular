import { Component, signal } from '@angular/core';
import { Router, RouterLink, RouterOutlet } from '@angular/router';
import { routes } from './app.routes';


@Component({
  selector: 'app-root',
  imports: [RouterOutlet,RouterLink],
  templateUrl: './prachi.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('component_04');
}
