import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { AquiEstamosPageRoutingModule } from './aqui-estamos-routing.module';

import { AquiEstamosPage } from './aqui-estamos.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    AquiEstamosPageRoutingModule
  ],
  declarations: [AquiEstamosPage]
})
export class AquiEstamosPageModule {}
