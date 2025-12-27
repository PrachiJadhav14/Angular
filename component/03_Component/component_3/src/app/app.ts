import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Basic } from '../pages/basic/basic';
import { SecondPage } from "../Second/second-page/second-page";
import { ThirdPage } from "../Third/third-page/third-page";
import { FourthPages } from '../Fourth/fourth-pages/fourth-pages';
import { FivePages } from '../Five/five-pages/five-pages';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, Basic, SecondPage,ThirdPage,FourthPages,FivePages],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('component_3');
}
