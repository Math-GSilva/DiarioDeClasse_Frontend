import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-dashboard-list',
  standalone: true,
  imports: [],
  templateUrl: './dashboard-list.component.html',
  styleUrl: './dashboard-list.component.scss'
})
export class DashboardListComponent {
  @Input() titleText: string = 'Categoria';
  @Input() listables: any[] = [];

  get displayListables(): any[] {
    return this.listables.slice(0, 6);
  }
}
