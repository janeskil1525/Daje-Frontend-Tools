import {Component, inject} from '@angular/core';
import { FormsModule } from '@angular/forms';
import { WorkflowService } from '../../../core/workflow/workflow.service';
import { ButtonModule } from 'primeng/button';
import { CardModule } from 'primeng/card';
import {ObjectInterface} from "../../objects/object.component/object.interface";
import {ActivatedRoute} from "@angular/router";
import {DatabaseService} from "../../../core/database/database.service";
import {VersionsInterface} from "../../versions/versions.component/versions.interface";
import {Divider} from "primeng/divider";
import {Checkbox} from "primeng/checkbox";


@Component({
  selector: 'app-generate-sql-component',
    imports: [
        FormsModule,
        ButtonModule,
        CardModule,
        Divider,
        Checkbox
    ],
  templateUrl: './generate.sql.component.html',
  styleUrl: './generate.sql.component.css',
  standalone:true,
})
export class GenerateSqlComponent {
    payload = {} as VersionsInterface;
    tools_projects_pkey: number = 0;
    private activatedRoute: ActivatedRoute = inject(ActivatedRoute);

    constructor( 
        private workflow: WorkflowService,
        private database: DatabaseService
    ) {
        this.activatedRoute.params.subscribe((params) => {
            this.tools_projects_pkey = parseInt(params['tools_projects_pkey']);
            this.database.load_record('CurrentVersion', this.tools_projects_pkey).subscribe((response: VersionsInterface)=> {
                this.payload = response
            });
        });
    }

    generateSQL() {
        this.workflow.setConnectorData('tools_projects', 0)
        this.workflow.callWorkflow(
            'tools_generate_sql', 'generate_sql', this.payload
        );
    }

}
