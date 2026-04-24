import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-demo',
  imports: [FormsModule],
  templateUrl: './demo.html',
  styleUrl: './demo.css',
})
export class Demo {
  name : any = 'prachi';

  Username = "";
  Password = "";

  login(){
    if(this.Username === 'admin' && this.Password === 'a123'){
         alert("Login Succesfully");
    }

  }
}
