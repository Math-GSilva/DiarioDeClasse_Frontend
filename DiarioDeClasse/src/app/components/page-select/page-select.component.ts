import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-page-select',
  standalone: true,
  imports: [],
  templateUrl: './page-select.component.html',
  styleUrl: './page-select.component.scss'
})
export class PageSelectComponent {
  @Input() first_page: string = '1';
  @Input() current_page: string = '1';
  @Input() last_page: string = '12';
}
