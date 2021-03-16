import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { LosDeCajonPage } from './los-de-cajon.page';

const routes: Routes = [
  {
    path: '',
    component: LosDeCajonPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class LosDeCajonPageRoutingModule {}
