import { Component, EventEmitter, Input, Output } from '@angular/core';
@Component({
  selector: 'app-classes-list',
  standalone: true,
  imports: [],
  templateUrl: './classes-list.component.html',
  styleUrl: './classes-list.component.scss'
})
export class ClassesListComponent {
  @Input() periodo: string = 'Período';
  @Input() classListables: any[] = [];
  @Output() goToClass: EventEmitter<void> = new EventEmitter<void>();

  classClicked(){
    this.goToClass.emit();
  }
}
