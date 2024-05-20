import { Component, Input, OnInit  } from '@angular/core';
import { Router, RouterModule, RouterOutlet } from '@angular/router';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { LoginComponent } from './auth/login/login.component';
import { RegisterComponent } from './auth/register/register.component';
import { CommentListComponent } from './components/comment-list/comment-list.component';
import { AuthService } from './services/auth.service';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, RouterModule, FormsModule, CommonModule], //, LoginComponent, RegisterComponent 
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  constructor(public authService: AuthService, private router: Router) {}
  ngOnInit(): void {
    throw new Error('Method not implemented.');
  }

  logout() {
    this.authService.logout();
  }
  isModerator(): boolean {
    
    const currentUser = this.authService.currentUserValue;
    const role = currentUser.role;
    const boobl = currentUser && currentUser.role === 'moderator'
    console.log('log: ', {role, currentUser, boobl});

    return boobl;
  }
}