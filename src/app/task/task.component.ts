import { Component } from '@angular/core';
import { DUMMY_TASKS } from './dummy_text';

@Component({
  selector: 'app-task',
  imports: [],
  templateUrl: './task.component.html',
  styleUrl: './task.component.scss',
})
export class TaskComponent {
  task = DUMMY_TASKS[2];
}
