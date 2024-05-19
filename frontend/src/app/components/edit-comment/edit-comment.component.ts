import { ActivatedRoute, Router } from '@angular/router';
import { CommentService } from '../../services/comment.service';
import { TopicService } from '../../services/topic.service';
import { Component, Input, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-edit-comment',
  imports: [FormsModule, CommonModule],
  standalone: true,
  templateUrl: './edit-comment.component.html',
  styleUrls: ['./edit-comment.component.css']
})
export class EditCommentComponent implements OnInit {
  content: string = '';
  commentId: string = '';
  topicId: string = '';

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private commentService: CommentService
  ) { }

  ngOnInit(): void {
    this.commentId = this.route.snapshot.paramMap.get('id') || '';
    this.topicId = this.route.snapshot.paramMap.get('topicId') || '';
    if (this.commentId) {
      this.commentService.getComment(this.commentId).subscribe(
        data => {
          this.content = data.content;
        },
        error => {
          console.error('Error fetching comment', error);
        }
      );
    }
  }

  updateComment() {
    if (this.commentId) {
      const comment = { content: this.content };
      this.commentService.updateComment(this.commentId, comment).subscribe(
        data => {
          this.router.navigate(['/topics', this.topicId]);
        },
        error => {
          console.error('Error updating comment', error);
        }
      );
    }
  }
}
