import { Component } from '@angular/core';
import { SplitterModule } from 'primeng/splitter';
import { MainRightSplit } from '../main.right.split/main.right.split';
import { MainLeftSplit } from "../main.left.split/main.left.split";

@Component({
  selector: 'app-main.component',
  imports: [
      SplitterModule,
      MainRightSplit,
      MainLeftSplit,
      MainLeftSplit
  ],
  templateUrl: './main.component.html',
  styleUrl: './main.component.scss',
  standalone:true
})
export class MainComponent {

}
