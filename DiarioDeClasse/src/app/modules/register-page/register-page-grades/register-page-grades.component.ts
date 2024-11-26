import { Component } from '@angular/core';
import { StudentsGradesComponent } from "../../../components/students-grades/students-grades.component";
import { MOCK_STUDENTS_GRADES } from '../../../interfaces/mocks/mock-students-grades';

@Component({
  selector: 'app-register-page-grades',
  standalone: true,
  imports: [StudentsGradesComponent],
  templateUrl: './register-page-grades.component.html',
  styleUrl: './register-page-grades.component.scss'
})
export class RegisterPageGradesComponent {
  class_info = this.generateList();
  edit_mode = false;

  generateList(){
    let list = [];

    for(let rep = 0; rep < 16; rep++){
      list.push(...MOCK_STUDENTS_GRADES);
    }

    return list;
  }

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
}
