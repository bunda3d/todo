import { Component } from '@angular/core';
import { UiService } from 'src/app/services/ui.service';
import { Subscription } from 'rxjs';
import { Router } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent {
  title: string = 'HoneyDo';
  showAddTask: boolean;
  subscription: Subscription;

  //services are declared in constructor
  constructor(private uiService: UiService, private router: Router) {
    //get bool value from button, send it through uiService's showAddTask() so it becomes the opposite value (is toggled)
    this.subscription = this.uiService.onToggle().subscribe((value) => (this.showAddTask = value));
    console.log('header component srvc func: ', this.showAddTask);
  }

  toggleAddTask() {
    this.uiService.toggleAddTask();
    console.log('toggle ', this.showAddTask);
  }

  //determine if a routed page is being displayed in the router-outlet, if so, don't need to display "Add Task" button.
  hasRoute(route: string ) {
    return this.router.url === route;
  }
}
