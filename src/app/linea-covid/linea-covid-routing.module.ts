import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { LineaCovidPage } from './linea-covid.page';

const routes: Routes = [
  {
    path: '',
    component: LineaCovidPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class LineaCovidPageRoutingModule {}
