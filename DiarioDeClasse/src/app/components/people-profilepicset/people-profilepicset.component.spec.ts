import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PeopleProfilepicsetComponent } from './people-profilepicset.component';

describe('PeopleProfilepicsetComponent', () => {
  let component: PeopleProfilepicsetComponent;
  let fixture: ComponentFixture<PeopleProfilepicsetComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PeopleProfilepicsetComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PeopleProfilepicsetComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
