import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../../services/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  username: string = '';
  password: string = '';

  constructor(private authService: AuthService, private router: Router) {
    this.authService.navigateTo.subscribe(route => {
      this.router.navigate([route]);
    });
  }

  ngOnInit() {}

  login() {
    this.authService.login(this.username, this.password).subscribe(
      data => {
        this.router.navigate(['/']);
      },
      error => {
        console.error('Login error', error);
      }
    );
  }
}
