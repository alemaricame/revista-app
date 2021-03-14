import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { PremioALaExcelenciaPageRoutingModule } from './premio-a-la-excelencia-routing.module';

import { PremioALaExcelenciaPage } from './premio-a-la-excelencia.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    PremioALaExcelenciaPageRoutingModule
  ],
  declarations: [PremioALaExcelenciaPage]
})
export class PremioALaExcelenciaPageModule {}
