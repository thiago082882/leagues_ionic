import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ClassificationTablePageRoutingModule } from './classification-table-routing.module';


@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ClassificationTablePageRoutingModule
  ],
  declarations: []
})
export class ClassificationTablePageModule {}
