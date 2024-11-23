import { Component } from '@angular/core';
import { MOCK_CLASSES_LISTABLE } from '../../../interfaces/mocks/mock-classes-listable';
import { SidebarComponent } from "../../../components/sidebar/sidebar.component";
import { CategorySearchComponent } from "../../../components/category-search/category-search.component";
import { ClassesListComponent } from "../../../components/classes-list/classes-list.component";

@Component({
  selector: 'app-classes-page-list',
  standalone: true,
  imports: [SidebarComponent, CategorySearchComponent, ClassesListComponent],
  templateUrl: './classes-page-list.component.html',
  styleUrl: './classes-page-list.component.scss'
})
export class ClassesPageListComponent {
  class_list = this.generateList();

  generateList(){
    let list = [];

    for(let rep = 0; rep < 6; rep++){
      list.push(...MOCK_CLASSES_LISTABLE);
    }

    return list;
  }
}
