import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StudentsPresenceComponent } from './students-presence.component';

describe('StudentsPresenceComponent', () => {
  let component: StudentsPresenceComponent;
  let fixture: ComponentFixture<StudentsPresenceComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [StudentsPresenceComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(StudentsPresenceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
