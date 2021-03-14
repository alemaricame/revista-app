import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ViewPlayerPageRoutingModule } from './view-player-routing.module';

import { ViewPlayerPage } from './view-player.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ViewPlayerPageRoutingModule
  ],
  declarations: [ViewPlayerPage]
})
export class ViewPlayerPageModule {}
