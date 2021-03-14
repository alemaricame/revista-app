import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { LoQueTenemosParaTiPage } from './lo-que-tenemos-para-ti.page';

const routes: Routes = [
  {
    path: '',
    component: LoQueTenemosParaTiPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class LoQueTenemosParaTiPageRoutingModule {}
