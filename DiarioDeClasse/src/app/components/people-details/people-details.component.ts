import { Component, Input } from '@angular/core';
import { TeachersInfo } from '../../interfaces/teachers-info';
import { StudentsInfo } from '../../interfaces/students-info';
import { CommonModule } from '@angular/common';

type Person = TeachersInfo | StudentsInfo;

@Component({
  selector: 'app-people-details',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './people-details.component.html',
  styleUrl: './people-details.component.scss'
})
export class PeopleDetailsComponent {
  @Input() enable: boolean = false;
  @Input() unique_info: string = 'undefined';
  @Input() info!: Person;
  @Input() hide_password: boolean = true;

  isTeacher(person: Person): person is TeachersInfo {
    return (person as TeachersInfo).password !== undefined;
  }

  toggleShowPassword(){
    this.hide_password = !this.hide_password;
  }
}