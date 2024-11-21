import { Component, Input } from '@angular/core';
import { SimpleClasses } from '../../interfaces/simple-classes';

@Component({
  selector: 'app-people-profileclasses',
  standalone: true,
  imports: [],
  templateUrl: './people-profileclasses.component.html',
  styleUrl: './people-profileclasses.component.scss'
})
export class PeopleProfileclassesComponent {
  @Input() list: any[] = [];
}
