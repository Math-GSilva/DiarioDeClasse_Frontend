import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StudentsAbsencesComponent } from './students-absences.component';

describe('StudentsAbsencesComponent', () => {
  let component: StudentsAbsencesComponent;
  let fixture: ComponentFixture<StudentsAbsencesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [StudentsAbsencesComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(StudentsAbsencesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
