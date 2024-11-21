import { Component, Input } from '@angular/core';
import { StudentsInfo } from '../../interfaces/students-info';
import { TeachersInfo } from '../../interfaces/teachers-info';

type Person = TeachersInfo | StudentsInfo;

@Component({
  selector: 'app-people-profilepicset',
  standalone: true,
  imports: [],
  templateUrl: './people-profilepicset.component.html',
  styleUrl: './people-profilepicset.component.scss'
})
export class PeopleProfilepicsetComponent {
  @Input() enable: boolean = false;
  @Input() info!: Person;
}
