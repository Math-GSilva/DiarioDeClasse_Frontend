import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StudentsMinilistComponent } from './students-minilist.component';

describe('StudentsMinilistComponent', () => {
  let component: StudentsMinilistComponent;
  let fixture: ComponentFixture<StudentsMinilistComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [StudentsMinilistComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(StudentsMinilistComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
