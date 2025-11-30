import {Component, inject} from '@angular/core';
import { InputTextModule } from 'primeng/inputtext';
import { FormsModule } from '@angular/forms';
import { FloatLabel } from 'primeng/floatlabel';
import { CardModule } from 'primeng/card';
import { CommonModule } from '@angular/common';
import { ButtonModule } from 'primeng/button';
import { CheckboxModule } from 'primeng/checkbox';
import { SelectModule } from 'primeng/select';
import { ObjectInterface } from './object.interface';
import { WorkflowService } from '../../../core/workflow/workflow.service';
import { ObjectTypeInterface } from './object.type.interface';
import { DatabaseService } from '../../../core/database/database.service';
import {ActivatedRoute} from "@angular/router";

@Component({
  selector: 'p-object-component',
  imports: [
    InputTextModule, 
    FormsModule, 
    FloatLabel, 
    CardModule, 
    CommonModule, 
    ButtonModule, 
    CheckboxModule,
    SelectModule,
  ],
  templateUrl: './object.component.html',
  styleUrl: './object.component.css',
  standalone: true,
})

export class ObjectComponent {
    private activatedRoute: ActivatedRoute = inject(ActivatedRoute);
    payload = {} as ObjectInterface;

    objecttypes = [] as ObjectTypeInterface[];
    tools_object_types_pkey:number = 0;

    constructor(
        private workflow: WorkflowService,
        private database: DatabaseService,
      ) {
        this.database.load_all_records('ObjectTypes').subscribe((response: ObjectTypeInterface[]) => {
            this.objecttypes = response
        });
        this.activatedRoute.params.subscribe((params) => {
            let tools_projects_pkey: number = parseInt(params['tools_projects_pkey']);
            let tools_objects_pkey: number = parseInt(params['tools_objects_pkey']);
            let tools_version_pkey: number  = parseInt(params['tools_version_pkey']);

            this.database.load_record('Object', tools_objects_pkey).subscribe((response: ObjectInterface)=> {
                this.payload = response
                if(this.payload.active) this.payload.active=true;
                this.tools_object_types_pkey = this.payload.tools_object_types_fkey
                if(!this.payload.tools_version_fkey || this.payload.tools_version_fkey === 0) {
                    this.payload.tools_version_fkey = tools_version_pkey;
                    this.payload.tools_projects_fkey = tools_projects_pkey;
                }
            });
        });
    }

    saveObject() {
        this.payload.tools_object_types_fkey = this.tools_object_types_pkey;
        this.workflow.callWorkflow(
            'tools', 'save_object', this.payload
        );
    }

    cleanPayload() {
        this.payload = {} as ObjectInterface;
        this.objecttypes = [] as ObjectTypeInterface[];
    }
}
