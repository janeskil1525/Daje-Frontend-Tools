import { Routes } from '@angular/router';
import { MainComponent } from "./features/main/main.component/main.component";
import { ParameterValuesComponent } from "./features/parameters/parameter.values.component/parameter.values.component";
//import {parameterValuesResolver} from "./features/parameters/parameter.values.component/parameter.values.resolver";
import {objectTreeListResolver} from "./features/objects/object.tree.list.component/object.tree.list-resolver";
import {TabsTreelistsComponent} from "./features/menu/tabs.treelists.component/tabs.treelists.component";


export const routes: Routes = [


    {
        path: 'main',
        component: MainComponent,
        title: 'Main',
        children:[

            {
                path:'app-tabs-treelists-component/:tools_projects_pkey',
                component:TabsTreelistsComponent,
                outlet:'left_split_object_tree',
                children:[
                    {
                        path:'parameter-value/:tools_parameters_pkey/:tools_projects_pkey',
                        component: ParameterValuesComponent,
                        outlet: 'middle_split',
                        resolve: {


                        }
                    },
                    {
                        path:'parameter-value',
                        component: ParameterValuesComponent,
                        outlet: 'middle_split',

                    },
                ]
            }

        ]
    },
    {
        path:'',
        redirectTo:'/main',
        pathMatch: 'full'
    }
];