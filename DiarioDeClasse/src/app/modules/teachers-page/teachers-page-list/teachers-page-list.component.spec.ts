import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TeachersPageListComponent } from './teachers-page-list.component';

describe('TeachersPageListComponent', () => {
  let component: TeachersPageListComponent;
  let fixture: ComponentFixture<TeachersPageListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TeachersPageListComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TeachersPageListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
