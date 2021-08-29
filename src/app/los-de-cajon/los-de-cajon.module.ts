import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { LosDeCajonPageRoutingModule } from './los-de-cajon-routing.module';

import { LosDeCajonPage } from './los-de-cajon.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    LosDeCajonPageRoutingModule
  ],
  declarations: [LosDeCajonPage]
})
export class LosDeCajonPageModule {}
