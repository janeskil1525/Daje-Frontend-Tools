import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TabsTreelistsComponent } from './tabs.treelists.component';

describe('TabsTreelistsComponent', () => {
  let component: TabsTreelistsComponent;
  let fixture: ComponentFixture<TabsTreelistsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TabsTreelistsComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TabsTreelistsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
