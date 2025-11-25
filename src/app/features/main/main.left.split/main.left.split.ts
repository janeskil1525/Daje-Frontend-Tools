import { Component } from '@angular/core';
import { ProjectsComponent } from '../../project/projects.component/projects.component';
import { ProjectNewComponent } from "../../project/project.new.component/project.new.component";
import { DividerModule } from 'primeng/divider';
import {RouterOutlet} from "@angular/router";

@Component({
  selector: 'app-main-left-split',
    imports: [
        ProjectsComponent,
        ProjectNewComponent,
        DividerModule,
        RouterOutlet
    ],
  templateUrl: './main.left.split.html',
  styleUrl: './main.left.split.scss',
    standalone:true,
})
export class MainLeftSplit {

}
