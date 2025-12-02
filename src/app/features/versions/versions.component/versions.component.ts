import { Component } from '@angular/core';
import { InputTextModule } from 'primeng/inputtext';
import { FormsModule } from '@angular/forms';
import { FloatLabel } from 'primeng/floatlabel';
import { ButtonModule } from 'primeng/button';
import { CardModule } from 'primeng/card';
import { CheckboxModule } from 'primeng/checkbox';
import { VersionsInterface } from './versions.interface';
import { DatabaseService } from '../../../core/database/database.service';

@Component({
  selector: 'p-versions-component',
  imports: [
    FormsModule, 
    InputTextModule, 
    FloatLabel, 
    CheckboxModule, 
    ButtonModule,
    CardModule
  ],
  templateUrl: './versions.component.html',
  styleUrl: './versions.component.css'
})

export class VersionsComponent {
  payload = {} as VersionsInterface;

  constructor(
    private database: DatabaseService,
  ) {

  };

}
