import { Component } from '@angular/core';
import {Divider} from "primeng/divider";
import {RouterOutlet} from "@angular/router";

@Component({
  selector: 'app-main-right-split',
    imports: [Divider, RouterOutlet],
  templateUrl: './main.right.split.html',
  styleUrl: './main.right.split.scss',
  standalone:true,
})
export class MainRightSplit {

}
