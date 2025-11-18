import { Component } from '@angular/core';
import { ProjectsComponent } from '../../project/projects.component/projects.component';
import { ProjectNewComponent } from "../../project/project.new.component/project.new.component";

@Component({
  selector: 'app-main-left-split',
  imports: [
      ProjectsComponent,
      ProjectNewComponent
    ],
  templateUrl: './main.left.split.html',
  styleUrl: './main.left.split.scss',
})
export class MainLeftSplit {

}
