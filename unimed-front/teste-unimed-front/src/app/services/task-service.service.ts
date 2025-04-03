import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class TaskServiceService {
  private readonly API_URL = 'http://localhost:8080/tasks';
  
  constructor(private http: HttpClient) { }

  create(title: string, status: string): Observable<any> {
    const body = { title, status };
    return this.http.post<any>(`${this.API_URL}`, body);
  }

  read(): Observable<any> {
    return this.http.get<any>(`${this.API_URL}`);
  }
  
}
