import { Component, OnInit, Input } from '@angular/core';
import { CommentService } from '../../services/comment.service';
import { ActivatedRoute, Router, RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-comment-list',
  imports: [FormsModule, CommonModule, RouterModule],
  standalone: true,
  templateUrl: './comment-list.component.html',
  styleUrls: ['./comment-list.component.css']
})
export class CommentListComponent implements OnInit {
  @Input() topicId!: string; // Use non-null assertion operator
  comments: any[] = [];

  constructor(private commentService: CommentService) { }

  ngOnInit(): void {
    if (this.topicId) {
      this.commentService.getComments(this.topicId).subscribe(
        data => {
          this.comments = data;
        },
        error => {
          console.error('Error fetching comments', error);
        }
      );
    }
  }
}