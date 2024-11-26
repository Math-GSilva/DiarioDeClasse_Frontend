import { Component, Input } from '@angular/core';
import { SidebarComponent } from "../../../components/sidebar/sidebar.component";
import { MOCK_CLASSES_INFO } from '../../../interfaces/mocks/mock-classes-info';
import { StudentsMinilistComponent } from "../../../components/students-minilist/students-minilist.component";

@Component({
  selector: 'app-classes-page-view',
  standalone: true,
  imports: [SidebarComponent, StudentsMinilistComponent],
  templateUrl: './classes-page-view.component.html',
  styleUrl: './classes-page-view.component.scss'
})
export class ClassesPageViewComponent {
  @Input() periodo: string = 'Período';
  edit_mode = false;
  class_info = MOCK_CLASSES_INFO;

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
