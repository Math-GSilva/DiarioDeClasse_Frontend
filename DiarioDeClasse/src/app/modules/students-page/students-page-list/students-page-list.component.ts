import { Component, inject } from '@angular/core';
import { SidebarComponent } from "../../../components/sidebar/sidebar.component";
import { CategorySearchComponent } from "../../../components/category-search/category-search.component";
import { PeopleListComponent } from "../../../components/people-list/people-list.component";
import { PageSelectComponent } from "../../../components/page-select/page-select.component";
import { MOCK_STUDENTS_LISTABLE } from '../../../interfaces/mocks/mock-students-listable';
import { Router, RouterModule } from '@angular/router';

@Component({
  selector: 'app-students-page-list',
  standalone: true,
  imports: [SidebarComponent, CategorySearchComponent, PeopleListComponent, PageSelectComponent, RouterModule],
  templateUrl: './students-page-list.component.html',
  styleUrl: './students-page-list.component.scss'
})

export class StudentsPageListComponent {
  router = inject(Router);
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

  onNextPage() {
    if (this.current_page < this.total_pages) {
      this.current_page++;
      console.log('Navigated to next page:', this.current_page);
    }
  }

  onPreviousPage() {
    if (this.current_page > 1) {
      this.current_page--;
      console.log('Navigated to previous page:', this.current_page);
    }
  }

  onSelectPage(pageNumber: number) {
    this.current_page = pageNumber;
    console.log('Enter key pressed. Current page set to:', this.current_page);
  }

  goToPage( route: string ){
    this.router.navigate([route]);
  }
}
