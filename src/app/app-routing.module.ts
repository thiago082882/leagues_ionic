import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
   {
    path: 'classification-table',
    loadChildren: () => import('./pages/classification-table/classification-table.module').then( m => m.ClassificationTablePageModule)
  },
  {
    path: '',
    redirectTo: 'classification-table',
    pathMatch: 'full'
  },

];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
