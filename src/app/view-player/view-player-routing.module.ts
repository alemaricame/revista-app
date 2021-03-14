import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ViewPlayerPage } from './view-player.page';

const routes: Routes = [
  {
    path: '',
    component: ViewPlayerPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ViewPlayerPageRoutingModule {}
