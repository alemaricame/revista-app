import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';
import { FormsModule } from '@angular/forms';


import { PortadaPageRoutingModule } from './portada-routing.module';

import { PortadaPage } from './portada.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    PortadaPageRoutingModule
  ],
  declarations: [PortadaPage]
})
export class PortadaPageModule {}
