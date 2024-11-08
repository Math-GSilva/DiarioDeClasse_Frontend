import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StudentsPageListComponent } from './students-page-list.component';

describe('StudentsPageListComponent', () => {
  let component: StudentsPageListComponent;
  let fixture: ComponentFixture<StudentsPageListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [StudentsPageListComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(StudentsPageListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
