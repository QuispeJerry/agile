import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {
  constructor(private router: Router) {}

  Ingresar() {
    this.router.navigate(['/home']);
  }

  Registrar() {
    this.router.navigate(['auth/register']);
  }
}
