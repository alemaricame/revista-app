import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { MuroDelDesarrolloPageRoutingModule } from './muro-del-desarrollo-routing.module';

import { MuroDelDesarrolloPage } from './muro-del-desarrollo.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    MuroDelDesarrolloPageRoutingModule
  ],
  declarations: [MuroDelDesarrolloPage]
})
export class MuroDelDesarrolloPageModule {}
