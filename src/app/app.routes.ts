import { Routes } from '@angular/router';
import { MainComponent } from "./features/main/main.component/main.component";
export const routes: Routes = [


    {
        path: '',
        component: MainComponent,
        title: 'Main',
        pathMatch: 'full'
    },
];