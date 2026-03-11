import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Basic } from "../pages/basic/basic";


@Component({
  selector: 'app-root',
  imports: [RouterOutlet,Basic],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('component');
}
