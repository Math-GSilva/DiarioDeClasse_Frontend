import { Component, Input } from '@angular/core';
import { StudentsInfo } from '../../interfaces/students-info';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-students-details',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './students-details.component.html',
  styleUrl: './students-details.component.scss'
})
export class StudentsDetailsComponent {
  @Input() info!: StudentsInfo;
}
