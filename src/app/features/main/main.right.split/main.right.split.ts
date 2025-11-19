import { Component } from '@angular/core';
import { GenerateSqlComponent } from "../../generators/generate.sql.component/generate.sql.component";

@Component({
  selector: 'app-main-right-split',
  imports: [GenerateSqlComponent],
  templateUrl: './main.right.split.html',
  styleUrl: './main.right.split.scss',
  standalone:true,
})
export class MainRightSplit {

}
