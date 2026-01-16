import { Component, signal } from '@angular/core';
// import { RouterOutlet } from '@angular/router';
import { HeaderComponent } from "./header/header.component";
import { TaskComponent } from "./task/task.component";
import { DUMMY_TASKS } from './task/dummy_text';
import { Task } from './models/task.interface';

@Component({
  selector: 'app-root',
  imports: [HeaderComponent, TaskComponent],
  templateUrl: './app.html',
  styleUrl: './app.scss'
})
export class App {
  tasks: Task[] = DUMMY_TASKS;
  SelectedText: Task | any | undefined = null;
  OnSelectTask(id: number) {
    this.SelectedText = this.tasks.find(task =>task.id === id)
  }
  
  protected readonly title = signal('angular to do list project');
}
