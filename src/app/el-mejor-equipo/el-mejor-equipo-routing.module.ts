import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ElMejorEquipoPage } from './el-mejor-equipo.page';

const routes: Routes = [
  {
    path: '',
    component: ElMejorEquipoPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ElMejorEquipoPageRoutingModule {}
