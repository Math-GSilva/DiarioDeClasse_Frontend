import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MoreButtonComponent } from "../more-button/more-button.component";

@Component({
  selector: 'app-people-list',
  standalone: true,
  imports: [CommonModule, MoreButtonComponent],
  templateUrl: './people-list.component.html',
  styleUrl: './people-list.component.scss'
})
export class PeopleListComponent {
  @Input() unique_info: string = 'undefined';
  @Input() listables: any[] = [];

  get displayListables(): any[] {
    // console.log(this.listables);

    return this.listables.slice(0, 8);
  }
}
