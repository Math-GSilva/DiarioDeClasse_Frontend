import { Component, Input } from '@angular/core';
import { StudentsAbsences } from '../../interfaces/students-absences';

@Component({
  selector: 'app-students-absences',
  standalone: true,
  imports: [],
  templateUrl: './students-absences.component.html',
  styleUrl: './students-absences.component.scss'
})
export class StudentsAbsencesComponent {
  @Input() enable: boolean = false;
  @Input() unique_info: string = 'undefined';
  @Input() listables: StudentsAbsences[] = [];
  @Input() height: string = '56vh';
  @Input() do_image: boolean = true;

  auto_total( numb_1: number, numb_2: number, numb_3: number){
    return numb_1 + numb_2 + numb_3;
  }

  auto_status( total: number, classes: number ){
    if (classes === 0) {
      return 0;
    }
    return ((classes - total) / classes) * 100;
  }
}
