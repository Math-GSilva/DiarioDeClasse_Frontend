import { Component, Input } from '@angular/core';
import { SidebarButtonComponent } from "../sidebar-button/sidebar-button.component";

@Component({
  selector: 'app-sidebar',
  standalone: true,
  imports: [SidebarButtonComponent],
  templateUrl: './sidebar.component.html',
  styleUrl: './sidebar.component.scss'
})
export class SidebarComponent {
  @Input() activeButton: string = 'Dashboard'; // Default active button

  // Method to check if the button is the active one
  isActive(buttonText: string): boolean {
    return this.activeButton === buttonText;
  }
  
  onSubmit(){}
}
