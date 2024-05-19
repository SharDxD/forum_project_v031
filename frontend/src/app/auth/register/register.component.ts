import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../../services/auth.service';

@Component({
  selector: 'app-register',
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
