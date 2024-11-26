import { Component } from '@angular/core';
import { StudentsPresenceComponent } from "../../../components/students-presence/students-presence.component";
import { MOCK_STUDENTS_PRESENCE } from '../../../interfaces/mocks/mock-students-presence';

@Component({
  selector: 'app-register-page-presence',
  standalone: true,
  imports: [StudentsPresenceComponent],
  templateUrl: './register-page-presence.component.html',
  styleUrl: './register-page-presence.component.scss'
})
export class RegisterPagePresenceComponent {
  class_info = this.generateList();
  edit_mode = false;

  generateList(){
    let list = [];

    for(let rep = 0; rep < 16; rep++){
      list.push(...MOCK_STUDENTS_PRESENCE);
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
