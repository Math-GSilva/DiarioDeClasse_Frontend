import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ClassesPageUsrComponent } from './classes-page-usr.component';

describe('ClassesPageUsrComponent', () => {
  let component: ClassesPageUsrComponent;
  let fixture: ComponentFixture<ClassesPageUsrComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ClassesPageUsrComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ClassesPageUsrComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
