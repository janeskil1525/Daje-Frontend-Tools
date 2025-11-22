import type {  Resolve, ActivatedRouteSnapshot, ResolveFn, RouterStateSnapshot } from '@angular/router';
import { inject, Injectable } from '@angular/core';
import {DatabaseService} from "../../../core/database/database.service";
import {ParameterValuesInterface} from "./parameter.values.interface";
import {Observable} from 'rxjs';
import {ResponseInterface} from "../../../core/response/response.interface";


@Injectable({ providedIn: 'root' })

export class parameterValuesResolver implements Resolve<ParameterValuesInterface> {
  constructor(private database: DatabaseService) {}
  resolve(
      route: ActivatedRouteSnapshot,
      state: RouterStateSnapshot
  ): Observable<ParameterValuesInterface>|Promise<ParameterValuesInterface>|ParameterValuesInterface {
    const tools_projects_pkey = parseInt(route.paramMap.get('tools_projects_pkey')!);
    const tools_parameters_pkey = parseInt(route.paramMap.get('tools_parameters_pkey')!);
    this.database.setKey2(tools_parameters_pkey);
    return ((this.database.load_record('ParameterValue', initialInterface(), tools_projects_pkey) as unknown) as ParameterValuesInterface);
  }
}

/*export const parameterValuesResolver: ResolveFn<ParameterValuesInterface> = (route: ActivatedRouteSnapshot, state: RouterStateSnapshot) => {


  const tools_projects_pkey = parseInt(route.paramMap.get('tools_projects_pkey')!);
  const tools_parameters_pkey = parseInt(route.paramMap.get('tools_parameters_pkey')!);
  let database = inject(DatabaseService);

  database.setKey2(tools_parameters_pkey);
  return ((database.load_record('ParameterValue', initialInterface(), tools_projects_pkey) as unknown) as ParameterValuesInterface);

};*/

function initialInterface() {
  return {
    tools_parameter_values_pkey:0, tools_projects_fkey:0, tools_parameters_fkey:0,
    value:"", description:"", active:false,
    editnum:1, insby:"", insdatetime:"", modby:"", moddatetime:""
  }
}