import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RegisterPagePresenceComponent } from './register-page-presence.component';

describe('RegisterPagePresenceComponent', () => {
  let component: RegisterPagePresenceComponent;
  let fixture: ComponentFixture<RegisterPagePresenceComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [RegisterPagePresenceComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RegisterPagePresenceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
