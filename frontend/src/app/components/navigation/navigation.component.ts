import { AuthService } from '../../services/auth.service';
import { ActivatedRoute, Router, RouterModule } from '@angular/router';
import { CommentService } from '../../services/comment.service';
import { Component, Input, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-navigation',
  imports: [FormsModule, CommonModule, RouterModule],
  standalone: true,
  templateUrl: './navigation.component.html',
  styleUrls: ['./navigation.component.css']
})
export class NavigationComponent {
  constructor(public authService: AuthService, private router: Router) {}

  logout() {
    this.authService.logout();
  }

  isModerator(): boolean {
    const currentUser = this.authService.currentUserValue;
    return currentUser && currentUser.role === 'moderator';
  }
}