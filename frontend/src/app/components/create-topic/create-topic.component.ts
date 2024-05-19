import { TopicService } from '../../services/topic.service';
import { Component, Input, OnInit } from '@angular/core';
import { CommentService } from '../../services/comment.service';
import { Router } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-create-topic',
  imports: [FormsModule, CommonModule],
  standalone: true,
  templateUrl: './create-topic.component.html',
  styleUrls: ['./create-topic.component.css']
})
export class CreateTopicComponent {
  title: string = '';
  content: string = '';

  constructor(private topicService: TopicService, private router: Router) { }

  createTopic() {
    const topic = { title: this.title, content: this.content };
    this.topicService.createTopic(topic).subscribe(
      data => {
        this.router.navigate(['/topics']);
      },
      error => {
        console.error('Error creating topic', error);
      }
    );
  }
}
