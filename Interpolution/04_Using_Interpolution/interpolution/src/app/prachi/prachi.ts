import { ChangeDetectionStrategy, Component, inject, ViewEncapsulation } from '@angular/core';
import { DatePipe } from '@angular/common';

@Component({
  selector: 'app-prachi',
  imports: [],
  templateUrl: './prachi.html',
  // styleUrl: './prachi.css',
  styles : [
    `h2{
      color : aqua;
      background-color:blueviolet;
    }`,
  ],
  providers:[DatePipe],
  changeDetection: ChangeDetectionStrategy.OnPush,
 encapsulation : ViewEncapsulation.None

})
export class Prachi {
   Today = new Date();
    marks : number = 123;
   date = inject(DatePipe);

   formattedDat = this.date.transform(this.Today,'dd-MM-yyy');


   showMessage(){
    alert("Welcome To My Angular Website");
    this.marks++;

   }
}
