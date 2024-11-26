import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RegisterPageGradesComponent } from './register-page-grades.component';

describe('RegisterPageGradesComponent', () => {
  let component: RegisterPageGradesComponent;
  let fixture: ComponentFixture<RegisterPageGradesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [RegisterPageGradesComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RegisterPageGradesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
