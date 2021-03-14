import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CumpleanosMesPage } from './cumpleanos-mes.page';

const routes: Routes = [
  {
    path: '',
    component: CumpleanosMesPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CumpleanosMesPageRoutingModule {}
