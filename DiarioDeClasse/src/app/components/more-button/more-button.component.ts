import { NgStyle } from '@angular/common';
import { Component, ElementRef, HostListener } from '@angular/core';

@Component({
  selector: 'app-more-button',
  standalone: true,
  imports: [ NgStyle ],
  templateUrl: './more-button.component.html',
  styleUrl: './more-button.component.scss'
})
export class MoreButtonComponent {
  show_more = false;

  constructor(private eRef: ElementRef) {}

  showMore(){
    return this.show_more;
  }

  onClick(){
    this.show_more = !this.show_more;
  }

  @HostListener('document:click', ['$event'])
  clickOutside(event: Event) {
    if (!this.eRef.nativeElement.contains(event.target)) {
      this.show_more = false;
    }
  }
}
