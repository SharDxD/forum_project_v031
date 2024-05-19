import { TopicService } from '../../services/topic.service';
import { ActivatedRoute, Router, RouterModule } from '@angular/router';
import { CommentService } from '../../services/comment.service';
import { Component, Input, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-topic-detail',
  imports: [FormsModule, CommonModule, RouterModule],
  standalone: true,
  templateUrl: './topic-detail.component.html',
  styleUrls: ['./topic-detail.component.css']
})

export class TopicDetailComponent implements OnInit {
  topic: any;
  topicId!: string; // Use non-null assertion operator

  constructor(
    private route: ActivatedRoute,
    private topicService: TopicService
  ) { }

  ngOnInit(): void {
    this.topicId = this.route.snapshot.paramMap.get('id')!;
    if (this.topicId) {
      this.topicService.getTopic(this.topicId).subscribe(
        data => {
          this.topic = data;
        },
        error => {
          console.error('Error fetching topic', error);
        }
      );
    }
  }
}