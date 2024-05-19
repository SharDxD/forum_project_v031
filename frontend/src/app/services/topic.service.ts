import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class TopicService {
  private apiUrl = 'http://localhost:3000/api/topics';

  constructor(private http: HttpClient) { }

  getTopics(): Observable<any> {
    return this.http.get<any>(this.apiUrl);
  }

  getTopic(id: string): Observable<any> {
    return this.http.get<any>(`${this.apiUrl}/${id}`);
  }

  createTopic(topic: any): Observable<any> {
    return this.http.post<any>(this.apiUrl, topic);
  }

  updateTopic(id: string, topic: any): Observable<any> {
    return this.http.put<any>(`${this.apiUrl}/${id}`, topic);
  }

  deleteTopic(id: string): Observable<any> {
    return this.http.delete<any>(`${this.apiUrl}/${id}`);
  }
}
