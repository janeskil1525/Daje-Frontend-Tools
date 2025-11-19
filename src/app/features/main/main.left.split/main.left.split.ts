import { Component } from '@angular/core';
import { ProjectsComponent } from '../../project/projects.component/projects.component';
import { ProjectNewComponent } from "../../project/project.new.component/project.new.component";
import { DividerModule } from 'primeng/divider';
import { ScrollPanelModule } from 'primeng/scrollpanel';
import { TabsModule } from 'primeng/tabs';
import {ObjectTreelistComponent} from "../../objects/object.tree.list.component/object.tree.list.component";
import {ParameterTreelistComponent} from "../../parameters/parameter.treelist.component/parameter.treelist.component";
import { PanelModule } from 'primeng/panel';

@Component({
  selector: 'app-main-left-split',
  imports: [
      ProjectsComponent,
      ProjectNewComponent,
      DividerModule,
      TabsModule,
      ScrollPanelModule,
      ObjectTreelistComponent,
      ParameterTreelistComponent,
      PanelModule
    ],
  templateUrl: './main.left.split.html',
  styleUrl: './main.left.split.scss',
    standalone:true,
})
export class MainLeftSplit {

}
