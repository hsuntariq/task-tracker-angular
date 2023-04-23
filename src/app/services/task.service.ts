import { Injectable } from '@angular/core';
import { TASKS } from '../test-tasks';
import { Task } from '../Tasks';
import { Observable, of } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';
const headerOptions = {
  headers: new HttpHeaders({
    'Content-Type': 'application/json',
  }),
};
@Injectable({
  providedIn: 'root',
})
export class TaskService {
  private api_url = 'http://localhost:5000/tasks/';
  constructor(private http: HttpClient) {}
  getTasks(): Observable<Task[]> {
    return this.http.get<Task[]>(this.api_url);
  }
  deleteTask(task: Task): Observable<Task[]> {
    const url = this.api_url + task.id;
    return this.http.delete<Task[]>(url);
  }
  toggleTask(task: Task): Observable<Task[]> {
    const url = this.api_url + task.id;
    return this.http.put<Task[]>(url, task, {
      headers: { 'Content-Type': 'application/json' },
    });
  }
  addItem(task: Task): Observable<Task[]> {
    return this.http.post<Task[]>(this.api_url, task);
  }
}
