import { Component, signal } from '@angular/core';
// import { RouterOutlet } from '@angular/router';
import { Login } from "./login/login";
import { Signup } from './signup/signup';
import { profilecomponent } from './profile/profile.component';
import { PrachiComponent } from './prachi/prachi';

@Component({
  selector: 'app-root',
  imports: [Login, Signup, profilecomponent, PrachiComponent],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('custome_component');
}
