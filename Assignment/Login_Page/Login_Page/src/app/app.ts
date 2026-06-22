import { Component} from '@angular/core';
import { FormsModule } from '@angular/forms';
@Component({
  selector: 'app-root',
  imports: [FormsModule],
  templateUrl: './app.html',
  standalone:true,
  styleUrl: './app.css'
})
export class App {
 email :string = '';
 password : string ='';
 UserRole : string = '';

 Login(){
  // console.log("Button Clicked");
  console.log('Email : ',this.email);
  console.log('Password :' , this.password);

  if(this.email === 'admin@gmail.com' && this.password === '1455'){
    alert('Login Successful');

  }else
  {
    alert('Invalid Credentials');
  }
 }

}
