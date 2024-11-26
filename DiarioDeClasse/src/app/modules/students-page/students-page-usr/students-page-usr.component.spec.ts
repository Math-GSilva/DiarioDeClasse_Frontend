import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StudentsPageUsrComponent } from './students-page-usr.component';

describe('StudentsPageUsrComponent', () => {
  let component: StudentsPageUsrComponent;
  let fixture: ComponentFixture<StudentsPageUsrComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [StudentsPageUsrComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(StudentsPageUsrComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
