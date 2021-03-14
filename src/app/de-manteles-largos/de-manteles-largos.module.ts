import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { DeMantelesLargosPageRoutingModule } from './de-manteles-largos-routing.module';

import { DeMantelesLargosPage } from './de-manteles-largos.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    DeMantelesLargosPageRoutingModule
  ],
  declarations: [DeMantelesLargosPage]
})
export class DeMantelesLargosPageModule {}
