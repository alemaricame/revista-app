import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { TuHistoriaPage } from './tu-historia.page';

const routes: Routes = [
  {
    path: '',
    component: TuHistoriaPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class TuHistoriaPageRoutingModule {}
