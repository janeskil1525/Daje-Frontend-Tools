import type {  Resolve, ActivatedRouteSnapshot, ResolveFn, RouterStateSnapshot } from '@angular/router';
import {DatabaseService} from "../../../core/database/database.service";
import {Observable} from "rxjs";
import {ParameterValuesInterface} from "../../parameters/parameter.values.component/parameter.values.interface";
import {ObjectTreeListService} from "./object.tree.list.service";
import {ResponseInterface} from "../../../core/response/response.interface";
import { inject } from '@angular/core';
import type {ObjectTreeListInterface} from "./object.tree.list.interface";

export const objectTreeListResolver: ResolveFn<ObjectTreeListInterface> = (route: ActivatedRouteSnapshot, state: RouterStateSnapshot) => {
    const treelist = inject(ObjectTreeListService);
    const tools_projects_pkey = route.paramMap.get('tools_projects_pkey')!;
    return treelist.getObjectTree(tools_projects_pkey);
};