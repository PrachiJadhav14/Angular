import { Component, computed, signal } from '@angular/core';

@Component({
  selector: 'app-computed-signlas',
  imports: [],
  templateUrl: './computed-signlas.html',
  styleUrl: './computed-signlas.css',
})
export class ComputedSignlas {
  x = signal (10);
  y =signal (20);
  z= computed(()=>this.x()+ this.y());

  showValue(){
    console.log(this.z());
this.x.set(100);
    // this.z = this.x + this.y;
    console.log(this.z());


  }
updatex(){
  this.x.set(1290);
}
}
function showValue() {
  throw new Error('Function not implemented.');
}

