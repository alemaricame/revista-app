import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { LineaCovidPageRoutingModule } from './linea-covid-routing.module';

import { LineaCovidPage } from './linea-covid.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    LineaCovidPageRoutingModule
  ],
  declarations: [LineaCovidPage]
})
export class LineaCovidPageModule {}
