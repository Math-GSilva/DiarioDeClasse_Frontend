import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PeopleProfileclassesComponent } from './people-profileclasses.component';

describe('PeopleProfileclassesComponent', () => {
  let component: PeopleProfileclassesComponent;
  let fixture: ComponentFixture<PeopleProfileclassesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PeopleProfileclassesComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PeopleProfileclassesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
