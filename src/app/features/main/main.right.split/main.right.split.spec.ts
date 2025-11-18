import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MainRightSplit } from './main.right.split';

describe('MainRightSplit', () => {
  let component: MainRightSplit;
  let fixture: ComponentFixture<MainRightSplit>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MainRightSplit]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MainRightSplit);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
