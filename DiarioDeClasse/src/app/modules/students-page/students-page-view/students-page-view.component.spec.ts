import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StudentsPageViewComponent } from './students-page-view.component';

describe('StudentsPageViewComponent', () => {
  let component: StudentsPageViewComponent;
  let fixture: ComponentFixture<StudentsPageViewComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [StudentsPageViewComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(StudentsPageViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
