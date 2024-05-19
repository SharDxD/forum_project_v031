import { Component, Input, OnInit } from '@angular/core';
import { CommentService } from '../../services/comment.service';
import { AuthService } from '../../services/auth.service';
import { Router } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-create-comment',
  imports: [FormsModule, CommonModule],
  standalone: true,
  templateUrl: './create-comment.component.html',
  styleUrls: ['./create-comment.component.css']
})
export class CreateCommentComponent {
  @Input() topicId: string = '';
  content: string = '';

  constructor(
    private commentService: CommentService,
    private authService: AuthService
  ) { }

  createComment() {
    const comment = { content: this.content, author: this.authService.currentUserValue.id };
    this.commentService.createComment(this.topicId, comment).subscribe(
      data => {
        // Handle successful comment creation
      },
      error => {
        console.error('Error creating comment', error);
      }
    );
  }
}
