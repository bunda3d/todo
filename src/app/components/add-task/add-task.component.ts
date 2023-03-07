import { Component, EventEmitter, Output } from '@angular/core';
import { UiService } from 'src/app/services/ui.service';
import { Subscription } from 'rxjs';
import { Task } from 'src/app/interfaces/Task';


@Component({
  selector: 'app-add-task',
  templateUrl: './add-task.component.html',
  styleUrls: ['./add-task.component.css']
})
export class AddTaskComponent {
  @Output() onAddTask: EventEmitter<Task> = new EventEmitter();
  text: string;
  day: string; 
  reminder: boolean = false; 
  showAddTask: boolean;
  subscription: Subscription;

  //services are declared in constructor
  constructor(private uiService: UiService) {
    //get bool value from button, send it through uiService's showAddTask() so it becomes the opposite value (is toggled)
    this.subscription = this.uiService.onToggle().subscribe((value) => (this.showAddTask = value));
    console.log('add-task component srvc func: ', this.showAddTask);
  }

  onSubmit() {
    if (!this.text) {
      alert('Add a task!');
      return;
    }

    const newTask = {
      text: this.text,
      day: this.day,
      reminder: this.reminder
    }

    this.onAddTask.emit(newTask);

    //clear the form after submit
    this.text = '';
    this.day = '';
    this.reminder = false;
  }

  

}
