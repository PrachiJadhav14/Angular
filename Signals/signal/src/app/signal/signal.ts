import { Component, computed, signal} from '@angular/core';

@Component({
  selector: 'app-signal',
  imports: [],
  templateUrl: './signal.html',
  styleUrl: './signal.css',
})
export class Signal {
  data = signal <number | String>(10);
count = computed(() => 200);

  updateSignal(){
    this.data.set("Hello");

  }


}
