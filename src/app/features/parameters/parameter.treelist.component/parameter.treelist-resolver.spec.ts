import { TestBed } from '@angular/core/testing';
import { ResolveFn } from '@angular/router';

import { parameterTreelistResolver } from './parameter.treelist-resolver';

describe('parameterTreelistResolver', () => {
  const executeResolver: ResolveFn<boolean> = (...resolverParameters) => 
      TestBed.runInInjectionContext(() => parameterTreelistResolver(...resolverParameters));

  beforeEach(() => {
    TestBed.configureTestingModule({});
  });

  it('should be created', () => {
    expect(executeResolver).toBeTruthy();
  });
});
