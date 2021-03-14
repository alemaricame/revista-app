import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { PremioALaExcelenciaPage } from './premio-a-la-excelencia.page';

const routes: Routes = [
  {
    path: '',
    component: PremioALaExcelenciaPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PremioALaExcelenciaPageRoutingModule {}
