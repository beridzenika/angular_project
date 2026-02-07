import { Component, Input} from '@angular/core';
import { TaskDetail } from '../models/task.interface';
@Component({
  selector: 'app-task-detail',
  imports: [],
  templateUrl: './task-detail.html',
  styleUrl: './task-detail.scss',
})
export class TaskDetailComponent {
  @Input ({required:true}) taskDetail!: TaskDetail;
  
}
