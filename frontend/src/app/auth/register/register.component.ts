import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../../services/auth.service';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-register',
  imports: [FormsModule, CommonModule],
  standalone: true,
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent {
  username: string = '';
  password: string = '';
  errorMessage: string = '';

  constructor(
    private authService: AuthService,
    private router: Router // Inject Router
  ) {}

  register() {
    this.authService.register(this.username, this.password).subscribe(
      data => {
        // Navigate to login after successful registration
        this.router.navigate(['/login']);
      },
      error => {
        this.errorMessage = 'Registration failed';
      }
    );
  }
}