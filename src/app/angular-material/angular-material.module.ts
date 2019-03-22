import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatButtonModule, MatCheckboxModule } from '@angular/material';
import { MatMenuModule } from '@angular/material/menu';
import {MatCardModule} from '@angular/material/card';

@NgModule({
  imports: [
    CommonModule,
    MatButtonModule, MatCheckboxModule, MatMenuModule, MatCardModule
  ],
  exports: [ MatButtonModule, MatCheckboxModule, MatMenuModule, MatCardModule ],
})
export class AngularMaterialModule { }
