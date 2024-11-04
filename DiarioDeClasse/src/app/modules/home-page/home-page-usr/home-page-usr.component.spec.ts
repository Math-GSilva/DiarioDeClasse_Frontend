import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HomePageUsrComponent } from './home-page-usr.component';

describe('HomePageUsrComponent', () => {
  let component: HomePageUsrComponent;
  let fixture: ComponentFixture<HomePageUsrComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [HomePageUsrComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(HomePageUsrComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
