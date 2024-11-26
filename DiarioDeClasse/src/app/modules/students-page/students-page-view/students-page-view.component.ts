import { Component, inject } from '@angular/core';
import { SidebarComponent } from "../../../components/sidebar/sidebar.component";
import { PeopleProfilepicsetComponent } from "../../../components/people-profilepicset/people-profilepicset.component";
import { PeopleProfileclassesComponent } from "../../../components/people-profileclasses/people-profileclasses.component";
import { PeopleDetailsComponent } from "../../../components/people-details/people-details.component";
import { MOCK_STUDENTS_INFO } from '../../../interfaces/mocks/mock-students-info';
import { MOCK_SIMPLE_CLASSES } from '../../../interfaces/mocks/mock-simple-classes';
import { Router, RouterModule } from '@angular/router';

@Component({
  selector: 'app-students-page-view',
  standalone: true,
  imports: [SidebarComponent, PeopleProfilepicsetComponent, PeopleProfileclassesComponent, PeopleDetailsComponent, RouterModule],
  templateUrl: './students-page-view.component.html',
  styleUrl: './students-page-view.component.scss'
})
export class StudentsPageViewComponent {
  router = inject(Router);
  student_info = MOCK_STUDENTS_INFO;
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
