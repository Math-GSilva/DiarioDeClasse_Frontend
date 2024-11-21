import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TeachersPageViewComponent } from './teachers-page-view.component';

describe('TeachersPageViewComponent', () => {
  let component: TeachersPageViewComponent;
  let fixture: ComponentFixture<TeachersPageViewComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TeachersPageViewComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TeachersPageViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
