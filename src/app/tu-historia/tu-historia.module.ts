import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { TuHistoriaPageRoutingModule } from './tu-historia-routing.module';

import { TuHistoriaPage } from './tu-historia.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    TuHistoriaPageRoutingModule
  ],
  declarations: [TuHistoriaPage]
})
export class TuHistoriaPageModule {}
