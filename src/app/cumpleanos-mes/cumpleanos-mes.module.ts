import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { CumpleanosMesPageRoutingModule } from './cumpleanos-mes-routing.module';

import { CumpleanosMesPage } from './cumpleanos-mes.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    CumpleanosMesPageRoutingModule
  ],
  declarations: [CumpleanosMesPage]
})
export class CumpleanosMesPageModule {}
