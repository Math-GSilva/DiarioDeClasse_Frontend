import { CommonModule } from '@angular/common';
import { Component, Input  } from '@angular/core';

@Component({
  selector: 'app-sidebar-button',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './sidebar-button.component.html',
  styleUrl: './sidebar-button.component.scss'
})
export class SidebarButtonComponent {
  @Input() buttonIcon: string = 'question_mark';
  @Input() buttonText: string = 'Button';
  @Input() backgroundColor: string = '#FFFFFF';
}