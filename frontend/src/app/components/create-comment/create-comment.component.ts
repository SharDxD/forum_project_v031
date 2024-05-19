import { Component, Input } from '@angular/core';
import { CommentService } from '../../services/comment.service';
import { AuthService } from '../../services/auth.service';

@Component({
  selector: 'app-create-comment',
  templateUrl: './create-comment.component.html',
  styleUrls: ['./create-comment.component.css']
})
export class CreateCommentComponent {
  @Input() topicId!: string; // Use non-null assertion operator
  content: string = '';

  constructor(
    private commentService: CommentService,
    private authService: AuthService
  ) { }

  createComment() {
    const comment = { content: this.content, author: this.authService.currentUserValue.id };
    this.commentService.createComment(this.topicId, comment).subscribe(
      data => {
        // Handle successful comment creation, e.g., clear the form
        this.content = '';
      },
      error => {
        console.error('Error creating comment', error);
      }
    );
  }
}
