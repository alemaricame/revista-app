import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { SaludMesPageRoutingModule } from './salud-mes-routing.module';

import { SaludMesPage } from './salud-mes.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    SaludMesPageRoutingModule
  ],
  declarations: [SaludMesPage]
})
export class SaludMesPageModule {}
