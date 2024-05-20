import { BrowserModule } from '@angular/platform-browser';
import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common'; // Import CommonModule
import { RouterModule } from '@angular/router';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './auth/login/login.component';
import { RegisterComponent } from './auth/register/register.component';
import { TopicListComponent } from './components/topic-list/topic-list.component';
import { TopicDetailComponent } from './components/topic-detail/topic-detail.component';
import { CreateTopicComponent } from './components/create-topic/create-topic.component';
import { EditTopicComponent } from './components/edit-topic/edit-topic.component';
import { CommentListComponent } from '/Users/kirillgolubev/Documents/forum_v03/frontend/src/app/components/comment-list/comment-list.component';
import { CreateCommentComponent } from '/Users/kirillgolubev/Documents/forum_v03/frontend/src/app/components/create-comment/create-comment.component';
import { EditCommentComponent } from '/Users/kirillgolubev/Documents/forum_v03/frontend/src/app/components/edit-comment/edit-comment.component';
import { AuthGuard } from './guards/auth.guard';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    RegisterComponent,
    TopicListComponent,
    TopicDetailComponent,
    CreateTopicComponent,
    EditTopicComponent,
    CommentListComponent, // Ensure CommentListComponent is declared here
    CreateCommentComponent, // Ensure CreateCommentComponent is declared here
    EditCommentComponent
  ],
  imports: [
    // CommentListComponent, // Ensure CommentListComponent is declared here
    // CreateCommentComponent, // Ensure CreateCommentComponent is declared here
    // EditCommentComponent,
    
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    CommonModule, // Ensure CommonModule is imported
    RouterModule
  ],
  providers: [],
  bootstrap: [AppComponent],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class AppModule { }
