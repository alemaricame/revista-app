import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { InformacionQueCuraPageRoutingModule } from './informacion-que-cura-routing.module';

import { InformacionQueCuraPage } from './informacion-que-cura.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    InformacionQueCuraPageRoutingModule
  ],
  declarations: [InformacionQueCuraPage]
})
export class InformacionQueCuraPageModule {}
