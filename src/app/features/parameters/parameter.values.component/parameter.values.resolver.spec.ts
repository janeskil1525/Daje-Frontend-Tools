import { TestBed } from '@angular/core/testing';
import { ResolveFn } from '@angular/router';

import { parameterValuesResolverResolver } from './parameter.values.resolver';

describe('parameterValuesResolverResolver', () => {
  const executeResolver: ResolveFn<boolean> = (...resolverParameters) => 
      TestBed.runInInjectionContext(() => parameterValuesResolverResolver(...resolverParameters));

  beforeEach(() => {
    TestBed.configureTestingModule({});
  });

  it('should be created', () => {
    expect(executeResolver).toBeTruthy();
  });
});
