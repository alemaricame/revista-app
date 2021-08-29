import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AquiEstamosPage } from './aqui-estamos.page';

const routes: Routes = [
  {
    path: '',
    component: AquiEstamosPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AquiEstamosPageRoutingModule {}
