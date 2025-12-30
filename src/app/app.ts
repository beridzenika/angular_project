import { Component, signal } from '@angular/core';
// import { RouterOutlet } from '@angular/router';
import { HeaderComponent } from "./header/header.component";
import { TaskComponent } from "./task/task.component";

@Component({
  selector: 'app-root',
  imports: [HeaderComponent, TaskComponent],
  templateUrl: './app.html',
  styleUrl: './app.scss'
})
export class App {
  protected readonly title = signal('angular_project');
}
