import { Component, signal } from '@angular/core';
import { HeaderComponent } from "./header/header.component";
import { TaskComponent } from "./task/task.component";
import { DUMMY_TASKS } from './task/dummy_text';
import { Task, TaskDetail } from './models/task.interface';
import { TaskDetailComponent } from "./task-detail/task-detail";
import { DUMMY_TASK_DETAILS } from './task-detail/dummy-task-detail';

@Component({
  selector: 'app-root',
  imports: [HeaderComponent, TaskComponent, TaskDetailComponent],
  templateUrl: './app.html',
  styleUrl: './app.scss'
})
export class App {
  tasks: Task[] = DUMMY_TASKS;
  SelectedText: TaskDetail | null | undefined = null;
  OnSelectTask(id: number) {
    const task = this.tasks.find(task =>task.id === id)!;
    const taskDetail = DUMMY_TASK_DETAILS.find(taskDetail => taskDetail.id === id)!;
    this.SelectedText = {
      ...task, 
      ...taskDetail
    }
  }
  
  protected readonly title = signal('angular to do list project');
}
