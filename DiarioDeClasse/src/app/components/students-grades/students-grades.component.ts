import { Component, Input } from '@angular/core';
import { StudentsGrades } from '../../interfaces/students-grades';

@Component({
  selector: 'app-students-grades',
  standalone: true,
  imports: [],
  templateUrl: './students-grades.component.html',
  styleUrl: './students-grades.component.scss'
})
export class StudentsGradesComponent {
  @Input() enable: boolean = false;
  @Input() unique_info: string = 'undefined';
  @Input() listables: StudentsGrades[] = [];
  @Input() height: string = '56vh';
  @Input() do_image: boolean = true;

  auto_average( N1: number, N2: number, N3: number){
    return ( Math.round( ( ( N1 + N2 + N3 ) / 3 ) * 100 ) / 100 );
  }
}
