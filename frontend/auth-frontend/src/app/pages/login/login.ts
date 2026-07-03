import { Component, inject } from '@angular/core';
import { RouterLink } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { Auth } from '../../services/auth';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [RouterLink, FormsModule],
  templateUrl: './login.html',
  styleUrl: './login.css',
})
export class Login {
  private auth = inject(Auth);

  loginData = {
    email: '',
    password: ''
  };

  loginUser() {
    this.auth.login(this.loginData).subscribe({
      next: (response: any) => {
        localStorage.setItem('token', response.access_token);
        alert('Login Successful!');
      },
      error: (error) => {
        console.log(error);
        alert('Login Failed!');
      }
    });
  }
}