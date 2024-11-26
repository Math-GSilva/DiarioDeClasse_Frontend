import { Component, inject } from '@angular/core';
import { SidebarComponent } from "../../../components/sidebar/sidebar.component";
import { PeopleDetailsComponent } from "../../../components/people-details/people-details.component";
import { MOCK_TEACHERS_INFO } from '../../../interfaces/mocks/mock-teachers-info';
import { PeopleProfilepicsetComponent } from "../../../components/people-profilepicset/people-profilepicset.component";
import { MOCK_SIMPLE_CLASSES } from '../../../interfaces/mocks/mock-simple-classes';
import { PeopleProfileclassesComponent } from "../../../components/people-profileclasses/people-profileclasses.component";
import { Router, RouterModule } from '@angular/router';

@Component({
  selector: 'app-teachers-page-view',
  standalone: true,
  imports: [SidebarComponent, PeopleDetailsComponent, PeopleProfilepicsetComponent, PeopleProfileclassesComponent, RouterModule],
  templateUrl: './teachers-page-view.component.html',
  styleUrl: './teachers-page-view.component.scss'
})
export class TeachersPageViewComponent {
  router = inject(Router);
  professor_info = MOCK_TEACHERS_INFO;
  classes_list = this.generateClassList();

  edit_mode = false;

  toggleEditMode() {
    this.edit_mode = !this.edit_mode;
  }

  saveButton() {
    this.toggleEditMode();
    this.reloadPage();
  }

  cancelButton() {
    this.toggleEditMode();
    this.reloadPage();
  }

  reloadPage() {
    window.location.reload();
  }

  generateClassList(){
    let list = [];

    for(let rep = 0; rep < 4; rep++){
      list.push(MOCK_SIMPLE_CLASSES);
    }

    return list;
  }

  goToPage( route: string ){
    this.router.navigate([route]);
  }
}
