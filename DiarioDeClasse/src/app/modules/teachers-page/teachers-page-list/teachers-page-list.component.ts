import { Component } from '@angular/core';
import { SidebarComponent } from "../../../components/sidebar/sidebar.component";
import { CategorySearchComponent } from "../../../components/category-search/category-search.component";
import { PeopleListComponent } from "../../../components/people-list/people-list.component";
import { PageSelectComponent } from "../../../components/page-select/page-select.component";
import { MOCK_TEACHERS_LISTABLE } from '../../../interfaces/mocks/mock-teachers-listable';

@Component({
  selector: 'app-teachers-page-list',
  standalone: true,
  imports: [SidebarComponent, CategorySearchComponent, PeopleListComponent, PageSelectComponent],
  templateUrl: './teachers-page-list.component.html',
  styleUrl: './teachers-page-list.component.scss'
})
export class TeachersPageListComponent {
  professores_list = this.generateList();

  generateList(){
    let list = [];

    for(let rep = 0; rep < 8; rep++){
      list.push(...MOCK_TEACHERS_LISTABLE);
    }

    return list;
  }

  reloadProfessores(){
    this.professores_list = this.generateList();
  }
}
