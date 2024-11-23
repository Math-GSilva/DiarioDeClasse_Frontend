import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ClassesPageViewComponent } from './classes-page-view.component';

describe('ClassesPageViewComponent', () => {
  let component: ClassesPageViewComponent;
  let fixture: ComponentFixture<ClassesPageViewComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ClassesPageViewComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ClassesPageViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
