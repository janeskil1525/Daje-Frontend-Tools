import { ResolveFn } from '@angular/router';

export const parameterTreelistResolver: ResolveFn<boolean> = (route, state) => {
  return true;
};
