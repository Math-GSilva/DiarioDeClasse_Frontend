import { Component, EventEmitter, Input, Output } from '@angular/core';

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
  @Output() pageChangeMore: EventEmitter<void> = new EventEmitter<void>();
  @Output() pageChangeView: EventEmitter<void> = new EventEmitter<void>();

  get displayListables(): any[] {
    return this.listables.slice(0, 6);
  }

  pageMoreClicked(){
    this.pageChangeMore.emit();
  }

  pageViewClicked(){
    this.pageChangeView.emit();
  }
}
