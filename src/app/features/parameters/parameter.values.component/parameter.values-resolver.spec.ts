import { TestBed } from '@angular/core/testing';
import { ResolveFn } from '@angular/router';

import { parameterValuesResolver } from './parameter.values-resolver';

describe('parameterValuesResolver', () => {
  const executeResolver: ResolveFn<boolean> = (...resolverParameters) => 
      TestBed.runInInjectionContext(() => parameterValuesResolver(...resolverParameters));

  beforeEach(() => {
    TestBed.configureTestingModule({});
  });

  it('should be created', () => {
    expect(executeResolver).toBeTruthy();
  });
});
