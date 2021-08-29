import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { GeneracionPageRoutingModule } from './generacion-routing.module';

import { GeneracionPage } from './generacion.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    GeneracionPageRoutingModule
  ],
  declarations: [GeneracionPage]
})
export class GeneracionPageModule {}
