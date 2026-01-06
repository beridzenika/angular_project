import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-desctext',
  imports: [],
  templateUrl: './desctext.component.html',
  styleUrl: './desctext.component.scss',
})
export class DesctextComponent {
  @Input() description!: string;

}
