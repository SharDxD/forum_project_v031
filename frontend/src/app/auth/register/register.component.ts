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
export class RegisterComponent implements OnInit {
  username: string = '';
  password: string = '';


  constructor(private authService: AuthService, private router: Router) {
    this.authService.navigateTo.subscribe(route => {
      this.router.navigate([route]);
    });
  }
  ngOnInit() {}

  register() {
    this.authService.register(this.username, this.password).subscribe(
      data => {
        this.router.navigate(['/login']);
      },
      error => {
        console.error('Registration error', error);
      }
    );
  }
}
