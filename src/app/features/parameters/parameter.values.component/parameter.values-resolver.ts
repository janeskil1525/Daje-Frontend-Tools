import { inject } from '@angular/core';
import type { ActivatedRouteSnapshot, ResolveFn, RouterStateSnapshot } from '@angular/router';
import {DatabaseService} from "../../../core/database/database.service";
import {ParameterValuesInterface} from "./parameter.values.interface";

export const parameterValuesResolver: ResolveFn<ParameterValuesInterface> = (route: ActivatedRouteSnapshot, state: RouterStateSnapshot) => {
    const database = inject(DatabaseService);
    const tools_parameters_pkey:number = parseInt(route.paramMap.get('tools_parameters_pkey')!);
    const tools_projects_pkey:number = parseInt(route.paramMap.get('tools_projects_pkey')!);
    database.setKey2( tools_parameters_pkey );
    return database.load_record('ParameterValue', tools_projects_pkey);
};
