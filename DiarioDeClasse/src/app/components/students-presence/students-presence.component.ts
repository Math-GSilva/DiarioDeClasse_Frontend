import { Component, Input } from '@angular/core';
import { StudentsPresence } from '../../interfaces/students-presence';

@Component({
  selector: 'app-students-presence',
  standalone: true,
  imports: [],
  templateUrl: './students-presence.component.html',
  styleUrl: './students-presence.component.scss'
})
export class StudentsPresenceComponent {
  @Input() enable: boolean = false;
  @Input() unique_info: string = 'undefined';
  @Input() listables: StudentsPresence[] = [];

  markPresence(){

  }

  markAbsence(){

  }
}
