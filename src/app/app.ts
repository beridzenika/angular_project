import { Component, signal } from '@angular/core';
// import { RouterOutlet } from '@angular/router';
import { HeaderComponent } from "./header/header.component";
import { TaskComponent } from "./task/task.component";
import { DUMMY_TASKS } from './task/dummy_text';
import { DesctextComponent } from "./desctext.component/desctext.component";

@Component({
  selector: 'app-root',
  imports: [HeaderComponent, TaskComponent, DesctextComponent],
  templateUrl: './app.html',
  styleUrl: './app.scss'
})
export class App {
  tasks = DUMMY_TASKS;
  descText: string = "temp text";
  OnSelectTask(event: { id: number; description: string }) {
    this.descText = event.description;
  }
  
  protected readonly title = signal('angular to do list project');
}
