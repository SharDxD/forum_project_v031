import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CommentService {
  private apiUrl = 'http://localhost:3000/api/comments';

  constructor(private http: HttpClient) { }

  getComments(topicId: string): Observable<any> {
    return this.http.get<any>(`${this.apiUrl}/${topicId}/comments`);
  }

  getComment(id: string): Observable<any> {
    return this.http.get<any>(`${this.apiUrl}/${id}`);
  }

  createComment(topicId: string, comment: any): Observable<any> {
    return this.http.post<any>(`${this.apiUrl}/${topicId}/comments`, comment);
  }

  updateComment(id: string, comment: any): Observable<any> {
    return this.http.put<any>(`${this.apiUrl}/${id}`, comment);
  }

  deleteComment(id: string): Observable<any> {
    return this.http.delete<any>(`${this.apiUrl}/${id}`);
  }
}
