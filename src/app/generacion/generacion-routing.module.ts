import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { GeneracionPage } from './generacion.page';

const routes: Routes = [
  {
    path: '',
    component: GeneracionPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class GeneracionPageRoutingModule {}
