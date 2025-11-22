import { TestBed } from '@angular/core/testing';
import { ResolveFn } from '@angular/router';

import { objectTreeListResolver } from './object.tree.list-resolver';

describe('objectTreeListResolver', () => {
  const executeResolver: ResolveFn<boolean> = (...resolverParameters) => 
      TestBed.runInInjectionContext(() => objectTreeListResolver(...resolverParameters));

  beforeEach(() => {
    TestBed.configureTestingModule({});
  });

  it('should be created', () => {
    expect(executeResolver).toBeTruthy();
  });
});
