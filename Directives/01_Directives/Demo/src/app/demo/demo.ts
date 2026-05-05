import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  selector: 'app-demo',
  imports: [CommonModule],
  templateUrl: './demo.html',
  styleUrl: './demo.css',
  // changeDetection : ChangeDetectionStrategy.OnPush
})
export class Demo {
 date : string = '03-05-2026';
 isvisble :  boolean = true;

 toggle(){
  if (this.isvisble){
    this.isvisble = false;
  }
  else{
    this.isvisble = true
  }
}
}
