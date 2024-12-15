import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ClassificationTablePage } from './classification-table.page';


const routes: Routes = [
  {
    path: '',
    component: ClassificationTablePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ClassificationTablePageRoutingModule {}
