import { Component, signal } from '@angular/core';

import { Student } from "../student/student";
import { Date } from "../date/date/date";

@Component({
  selector: 'app-root',
  imports: [Student, Date],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('using_Function');
}
