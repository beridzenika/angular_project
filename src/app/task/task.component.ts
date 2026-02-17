import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Task } from '../models/task.interface';
import { ButtonComponent } from '../button/button.component';

@Component({
  selector: 'app-task',
  templateUrl: './task.component.html',
  styleUrl: './task.component.scss',
  standalone: false
})
export class TaskComponent {
  @Input({required:true}) task!:Task;
  @Input({required:true}) active !: boolean;

  @Output() select = new EventEmitter<number>();

  OnClick () {
    this.select.emit(this.task.id);
  }
}
