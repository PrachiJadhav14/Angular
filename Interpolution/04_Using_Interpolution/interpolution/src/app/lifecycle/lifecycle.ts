import { Component, OnChanges, OnDestroy, OnInit, SimpleChanges } from '@angular/core';

@Component({
  selector: 'app-lifecycle',
  imports: [],
  templateUrl: './lifecycle.html',
  styleUrl: './lifecycle.css',
})
export class Lifecycle implements OnInit,OnChanges,OnDestroy{

  constructor(){
    confirm("First Constructor Called....");
  }
  ngOnChanges(changes: SimpleChanges): void {
    throw new Error('Method not implemented.');
  }
OnChanges(){
  confirm("ngOnchanges Called...!");
}
  ngOnInit() {
    confirm("ngOninit Called");
  }
  ngOnDestroy(): void {
    confirm("Component Distroy....!!");
  }
}
