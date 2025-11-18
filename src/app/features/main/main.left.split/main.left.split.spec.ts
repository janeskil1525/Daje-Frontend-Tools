import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MainLeftSplit } from './main.left.split';

describe('MainLeftSplit', () => {
  let component: MainLeftSplit;
  let fixture: ComponentFixture<MainLeftSplit>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MainLeftSplit]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MainLeftSplit);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
