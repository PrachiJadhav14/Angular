import { Component, effect, signal } from '@angular/core';
import { Signal } from '../signal/signal';
import { count } from 'rxjs';

@Component({
  selector: 'app-effect',
  imports: [],
  templateUrl: './effect.html',
  styleUrl: './effect.css',
})
export class Effect {
  UserName = signal ('Prachi');
  count = signal(0)
  displayHeading = false;


  constructor(){
    effect(()=>{
      if(this.count () ==2){
        this.displayHeading=true;
        setTimeout(() => {
          this.displayHeading = false
        },2000);
      }
      else{
        this.displayHeading =false
      }
      // console.log(this.UserName());

    })
  }

  toggleVlue(){
    // this.displayHeading = !this.displayHeading;
    this.count.set(this.count()+1);
  }
}
