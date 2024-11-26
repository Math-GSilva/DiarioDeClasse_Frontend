import { Component, Input } from '@angular/core';
import { MoreButtonComponent } from "../more-button/more-button.component";

@Component({
  selector: 'app-classes-list',
  standalone: true,
  imports: [],
  templateUrl: './classes-list.component.html',
  styleUrl: './classes-list.component.scss'
})
export class ClassesListComponent {
  @Input() periodo: string = 'Período';
  @Input() classListables: any[] = [];
}
