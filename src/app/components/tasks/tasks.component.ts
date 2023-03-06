import { Component, OnInit } from '@angular/core';

import { TaskService } from 'src/app/Services/task.service';
import { Task } from 'src/app/interfaces/Task';


@Component({
  selector: 'app-tasks',
  templateUrl: './tasks.component.html',
  styleUrls: ['./tasks.component.css']
})
export class TasksComponent implements OnInit{
  tasks: Task[] = [];

  //services must be added to constructor
  constructor(private taskService: TaskService) {}

  ngOnInit(): void {
    //Called after the constructor, initializing input properties.
    this.taskService.getTasks().subscribe((tasks) => (this.tasks = tasks));
    
  }


}
