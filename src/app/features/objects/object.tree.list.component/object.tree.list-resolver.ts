import type {  Resolve, ActivatedRouteSnapshot, ResolveFn, RouterStateSnapshot } from '@angular/router';

export const objectTreeListResolver: ResolveFn<boolean> = (route: ActivatedRouteSnapshot, state: RouterStateSnapshot) => {
  return true;
};
