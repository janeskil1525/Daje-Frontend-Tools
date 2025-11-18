import { Component } from '@angular/core';
import { Dialog } from 'primeng/dialog';
import { ButtonModule } from 'primeng/button';
import { InputTextModule } from 'primeng/inputtext';
import { WorkflowService } from '../../../core/workflow/workflow.service';
import { FormsModule } from '@angular/forms';
import { ProjectNewTInterface } from './project.new.t.interface';

@Component({
    selector: 'app-project-new-dialog',
    templateUrl: './project.new..html',
    standalone: true,
    imports: [Dialog, ButtonModule, InputTextModule, FormsModule]
})

export class ProjectNewComponent {
    visible: boolean = false;
    payload: ProjectNewTInterface = {name:"", state:""}

    constructor( 
        private workflowservice: WorkflowService
    ) {}  
    
    project: string = '';
    state: string = '';

    showDialog() {
        this.visible = true;
    }

    saveProject() {    

        this.workflowservice.callWorkflow('tools', 'save_new_project', this.payload)
    
        this.visible = false;
    }
}