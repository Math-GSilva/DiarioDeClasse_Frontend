import { Component, EventEmitter, Input, Output } from '@angular/core';

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

  @Output() nextPage = new EventEmitter<void>();
  @Output() previousPage = new EventEmitter<void>();
  @Output() selectPage = new EventEmitter<number>();

  goToNextPage() {
    this.nextPage.emit();
  }

  goToPreviousPage() {
    this.previousPage.emit();
  }

  goToSelectPage(value: number){
    this.selectPage.emit(value);
  }

  onEnterPress(value: string) {
    const pageNumber = Number(value);

    if( pageNumber > this.first_page && pageNumber < this.last_page ){
      this.goToSelectPage(pageNumber);
    }
  }
}
