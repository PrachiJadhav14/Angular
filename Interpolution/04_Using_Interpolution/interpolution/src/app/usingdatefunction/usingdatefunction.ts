import { DatePipe } from '@angular/common';
import { Component, inject } from '@angular/core';

@Component({
  selector: 'app-usingdatefunction',
  imports: [],
  templateUrl: './usingdatefunction.html',
  styleUrl: './usingdatefunction.css',
})
export class Usingdatefunction {
    // current date
    today = new Date();

    // DatePipe inject
    date = inject(DatePipe);

 // formatted date
 formattedDate = this.date.transform(this.today,'dd-MM-yyyy');


 // button click message
  showMessage(){
    alert("Welcome to My Angular Website");
  }
}
