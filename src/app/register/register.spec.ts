import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AppRegister } from './register';

describe('AppRegister', () => {
  let component: AppRegister;
  let fixture: ComponentFixture<AppRegister>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AppRegister]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AppRegister);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
