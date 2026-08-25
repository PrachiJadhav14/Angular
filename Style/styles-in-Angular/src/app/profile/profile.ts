import { Component } from '@angular/core';

@Component({
  selector: 'app-profile',
  imports: [],
  templateUrl: './profile.html',
  styleUrls: ['./profile.btn.css','./profile.css']
})
export class Profile {
  color  = "green";
fontSize = "500px";
headingSizeBig = "100px";
headingSizeSmall = "80px";

zoom = true;

updateHeadingSize(){
  this.zoom=!this.zoom;
}
}
