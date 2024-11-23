import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MoreButtonComponent } from "../more-button/more-button.component";
import { StudentsListable } from '../../interfaces/students-listable';

@Component({
  selector: 'app-students-minilist',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './students-minilist.component.html',
  styleUrl: './students-minilist.component.scss'
})
export class StudentsMinilistComponent {
  @Input() enable: boolean = false;
  @Input() unique_info: string = 'undefined';
  @Input() listables: StudentsListable[] = [];

  remove(){

  }
}
