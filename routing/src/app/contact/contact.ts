import { Component } from '@angular/core';
import { NgControl } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-contact',
  imports: [],
  templateUrl: './contact.html',
  styleUrl: './contact.css',
})
export class Contact {
  userId : any;
  constructor(private route:ActivatedRoute){}
   ngonInit(){
    this.userId = this.route.snapshot.paramMap.get('id');

   }



}
