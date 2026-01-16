import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Task } from '../models/task.interface';

@Component({
  selector: 'app-task',
  imports: [],
  templateUrl: './task.component.html',
  styleUrl: './task.component.scss',
})
export class TaskComponent {
  @Input({required:true}) task!:Task;
  @Input({required:true}) active !: boolean;

  @Output() select = new EventEmitter<number>();

  OnClick () {
    this.select.emit(this.task.id);
  }
}
