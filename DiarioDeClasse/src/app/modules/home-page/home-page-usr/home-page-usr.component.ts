import { Component, inject } from '@angular/core';
import { CategorySearchComponent } from "../../../components/category-search/category-search.component";
import { ClassesListComponent } from "../../../components/classes-list/classes-list.component";
import { MOCK_CLASSES_LISTABLE } from '../../../interfaces/mocks/mock-classes-listable';
import { Router, RouterModule } from '@angular/router';

@Component({
  selector: 'app-home-page-usr',
  standalone: true,
  imports: [CategorySearchComponent, ClassesListComponent, RouterModule],
  templateUrl: './home-page-usr.component.html',
  styleUrl: './home-page-usr.component.scss'
})
export class HomePageUsrComponent {
  router = inject(Router);
  class_list = this.generateList();

  generateList(){
    let list = [];

    for(let rep = 0; rep < 6; rep++){
      list.push(...MOCK_CLASSES_LISTABLE);
    }

    return list;
  }

  onClassClicked(){
    this.router.navigate(['/classes/user']);
  }
}
