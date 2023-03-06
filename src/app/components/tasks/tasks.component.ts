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
    //"Get All" Called after the constructor, initializing input properties.
    this.taskService.getTasks().subscribe((tasks) => (this.tasks = tasks));
  }

  //delete item by id as defined in service, then reiterate subscription for all items except the deleted item.id 
  deleteTask(task: Task) {
    this.taskService.deleteTask(task).subscribe(() => (this.tasks = this.tasks.filter(t => t.id !== task.id)))
  }

  //passing in the whole object for this PUT call
  toggleReminder(task: Task) {
    task.reminder = !task.reminder;
    this.taskService.updateTaskReminder(task).subscribe();
    console.log("this task's reminder status is now: ", task.reminder);
  }

}
