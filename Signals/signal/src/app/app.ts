import { Component, effect, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Signal } from './signal/signal';
import { ComputedSignlas } from "./computed-signlas/computed-signlas";
import { Effect } from './effect/effect';

@Component({
  selector: 'app-root',
  imports: [Signal, ComputedSignlas,Effect],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('signal');
  count = signal(10);
  x = 20;

  constructor(){
    effect(()=>{
      console.log(this.count())
    })
  }
  update(val : string){
    // this.count.set(this.count()+1);
    // this.x = this.x+1;

    if(val == 'inc'){
       this.count.set(this.count()+1)
    }
    else{
        this.count.set(this.count()-1)
    }
  }
}

