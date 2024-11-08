import { Component } from '@angular/core';
import { SidebarComponent } from "../../../components/sidebar/sidebar.component";
import { CategorySearchComponent } from "../../../components/category-search/category-search.component";
import { PeopleListComponent } from "../../../components/people-list/people-list.component";
import { PageSelectComponent } from "../../../components/page-select/page-select.component";
import { MOCK_STUDENTS_LISTABLE } from '../../../interfaces/mocks/mock-students-listable';
@Component({
  selector: 'app-students-page-list',
  standalone: true,
  imports: [SidebarComponent, CategorySearchComponent, PeopleListComponent, PageSelectComponent],
  templateUrl: './students-page-list.component.html',
  styleUrl: './students-page-list.component.scss'
})
export class StudentsPageListComponent {
  alunos_list = this.generateList();
  total_pages = 13;
  current_page = 1;

  generateList(){
    let list = [];

    for(let rep = 0; rep < 8; rep++){
      list.push(...MOCK_STUDENTS_LISTABLE);
    }

    return list;
  }

  reloadProfessores(){
    this.alunos_list = this.generateList();
  }
}
