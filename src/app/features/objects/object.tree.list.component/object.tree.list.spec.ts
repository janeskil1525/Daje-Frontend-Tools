import { TestBed } from '@angular/core/testing';

import { ObjectTreeListService } from './object.tree.list.service';

describe('ObjectTreeListService', () => {
  let service: ObjectTreeListService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ObjectTreeListService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
