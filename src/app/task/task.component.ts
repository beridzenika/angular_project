import { Component, EventEmitter, Input, Output } from '@angular/core';
import { DYNAMIC_TYPE } from '@angular/compiler';

@Component({
  selector: 'app-task',
  imports: [],
  templateUrl: './task.component.html',
  styleUrl: './task.component.scss',
})
export class TaskComponent {
  @Input({required:true}) id!: number;
  @Input({required:true}) title!: string;
  @Input({required:true}) assignee!: string;
  @Input({required:true}) status!: string;
  @Input() description!: string;

  @Output() select = new EventEmitter<{id:number, description: string}>();

  OnClick () {
    this.select.emit({id: this.id, description: this.description});
  }
}
