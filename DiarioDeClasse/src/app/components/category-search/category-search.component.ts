import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-category-search',
  standalone: true,
  imports: [],
  templateUrl: './category-search.component.html',
  styleUrl: './category-search.component.scss'
})
export class CategorySearchComponent {
  @Input() doAdd: boolean = true;
  @Output() pageChangeAdd: EventEmitter<void> = new EventEmitter<void>();

  onSubmit(): void{}

  addClicked(){
    this.pageChangeAdd.emit();
  }
}
