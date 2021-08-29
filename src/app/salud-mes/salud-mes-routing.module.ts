import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { SaludMesPage } from './salud-mes.page';

const routes: Routes = [
  {
    path: '',
    component: SaludMesPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class SaludMesPageRoutingModule {}
