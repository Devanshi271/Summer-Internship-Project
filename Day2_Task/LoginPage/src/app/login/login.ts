import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './login.html',
  styleUrl: './login.css'
})
export class Login {
  username: string='';
  password: string='';

  onLogin(){
    console.log('Username : ',this.username);
    console.log('Password : ',this.password);
    alert('Login Successful!!!');
  }
}
