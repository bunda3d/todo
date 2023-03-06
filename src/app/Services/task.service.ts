import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Task } from 'src/app/interfaces/Task';


@Injectable({
  providedIn: 'root'
})
export class TaskService {
  private apiUrl = 'http://localhost:5000/tasks'

  constructor(private db:HttpClient) { }

  getTasks(): Observable<Task[]> {
    return this.db.get<Task[]>(this.apiUrl)
  }

  deleteTask(task: Task): Observable<Task> {
    const itemUri = `${this.apiUrl}/${task.id}`;
    return this.db.delete<Task>(itemUri);
  }
  
}
