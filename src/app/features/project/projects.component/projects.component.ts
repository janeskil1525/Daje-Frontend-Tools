import {Component, inject, model } from '@angular/core';
import { Subscription } from 'rxjs';
import { FormsModule } from '@angular/forms';
import { SelectModule } from 'primeng/select';
import { ProjectsInterface } from './projects.interface';
import { Router } from '@angular/router';
import { DatabaseService } from "../../../core/database/database.service";
import {WorkflowService} from "../../../core/workflow/workflow.service";
import {NewProjectService} from "../project.new.component/new.project.service";

@Component({
  selector: 'app-select-projects',
  imports: [SelectModule, FormsModule],
  templateUrl: './projects.component.html',
  styleUrl: './projects.component.css',
  standalone: true,
})

export class ProjectsComponent {
    tools_projects_pkey: number = 0;
    nodes = model();
    private router = inject(Router);
    projects: ProjectsInterface[] = [];

    new_project!: Subscription;

    constructor(
        private database: DatabaseService,
        private workflow: WorkflowService,
        private new_project_service: NewProjectService
    ) {
        this.new_project = this.new_project_service.getClickEvent().subscribe(()=>{
            this.load_projects();
        });
    }

    ngOnInit() {
        this.load_projects();
    }

    load_projects() {
        this.database.load_all_records('Projects').subscribe((response: ProjectsInterface[]) => {
            this.projects = response;
        });
    }

    loadTreeList(tools_projects_pkey: number) {
        this.workflow.setConnectorData('tools_projects', tools_projects_pkey)
        this.database.load_record('CurrentVersion', tools_projects_pkey).subscribe((response) => {
            this.router.navigate(['main',
                {
                    outlets: {
                        left_split_object_tree:
                            ['app-tabs-treelists-component',
                                tools_projects_pkey, response.tools_version_pkey
                            ]
                    }
                }
                ]
            );
        });
    }
}

