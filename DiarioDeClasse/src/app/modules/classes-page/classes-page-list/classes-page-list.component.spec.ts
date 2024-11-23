import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ClassesPageListComponent } from './classes-page-list.component';

describe('ClassesPageListComponent', () => {
  let component: ClassesPageListComponent;
  let fixture: ComponentFixture<ClassesPageListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ClassesPageListComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ClassesPageListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
