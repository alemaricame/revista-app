import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { MuroDelDesarrolloPage } from './muro-del-desarrollo.page';

const routes: Routes = [
  {
    path: '',
    component: MuroDelDesarrolloPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class MuroDelDesarrolloPageRoutingModule {}
