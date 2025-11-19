import { Routes } from '@angular/router';
import { MainComponent } from "./features/main/main.component/main.component";
import { ParameterValuesComponent } from "./features/parameters/parameter.values.component/parameter.values.component";

export const routes: Routes = [

    {
        path:'parameter-value',
        component: ParameterValuesComponent,
        outlet:'middlesplit',
        title:'Parameter value',
    },
    {
        path: '',
        component: MainComponent,
        title: 'Main',
        pathMatch: 'full'
    },
];