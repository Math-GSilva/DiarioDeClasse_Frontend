import { Component, inject, Input } from '@angular/core';
import { SidebarButtonComponent } from "../sidebar-button/sidebar-button.component";
import { Router, RouterModule } from '@angular/router';

@Component({
  selector: 'app-sidebar',
  standalone: true,
  imports: [SidebarButtonComponent, RouterModule],
  templateUrl: './sidebar.component.html',
  styleUrl: './sidebar.component.scss'
})
export class SidebarComponent {
  router = inject(Router);
  @Input() activeButton: string = 'Dashboard'; // Default active button

  // Method to check if the button is the active one
  isActive(buttonText: string): boolean {
    return this.activeButton === buttonText;
  }
  
  onSubmit(){}

  goToPage( route: string ){
    this.router.navigate([route]);
  }
}
