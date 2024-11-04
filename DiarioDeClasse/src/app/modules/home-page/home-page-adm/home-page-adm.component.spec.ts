import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HomePageAdmComponent } from './home-page-adm.component';

describe('HomePageAdmComponent', () => {
  let component: HomePageAdmComponent;
  let fixture: ComponentFixture<HomePageAdmComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [HomePageAdmComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(HomePageAdmComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
