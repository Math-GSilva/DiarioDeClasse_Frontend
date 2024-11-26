import { Component } from '@angular/core';
import { CategorySearchComponent } from "../../../components/category-search/category-search.component";
import { StudentsMinilistComponent } from "../../../components/students-minilist/students-minilist.component";
import { MOCK_CLASSES_INFO } from '../../../interfaces/mocks/mock-classes-info';

@Component({
  selector: 'app-classes-page-usr',
  standalone: true,
  imports: [CategorySearchComponent, StudentsMinilistComponent],
  templateUrl: './classes-page-usr.component.html',
  styleUrl: './classes-page-usr.component.scss'
})
export class ClassesPageUsrComponent {
  class_info = MOCK_CLASSES_INFO;
}
