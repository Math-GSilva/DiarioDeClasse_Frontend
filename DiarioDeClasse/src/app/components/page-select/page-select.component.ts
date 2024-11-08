import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-page-select',
  standalone: true,
  imports: [],
  templateUrl: './page-select.component.html',
  styleUrl: './page-select.component.scss'
})
export class PageSelectComponent {
  @Input() first_page: number = 1;
  @Input() current_page: number = 2;
  @Input() last_page: number = 12;
}
