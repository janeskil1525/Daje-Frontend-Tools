import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ObjectTreelistComponent } from './object.tree.list.component';

describe('ObjectTreelistComponent', () => {
  let component: ObjectTreelistComponent;
  let fixture: ComponentFixture<ObjectTreelistComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ObjectTreelistComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ObjectTreelistComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
