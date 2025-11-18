import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MainMiddleSplit } from './main.middle.split';

describe('MainMiddleSplit', () => {
  let component: MainMiddleSplit;
  let fixture: ComponentFixture<MainMiddleSplit>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MainMiddleSplit]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MainMiddleSplit);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
