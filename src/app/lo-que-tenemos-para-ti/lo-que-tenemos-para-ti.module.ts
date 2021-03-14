import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { LoQueTenemosParaTiPageRoutingModule } from './lo-que-tenemos-para-ti-routing.module';

import { LoQueTenemosParaTiPage } from './lo-que-tenemos-para-ti.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    LoQueTenemosParaTiPageRoutingModule
  ],
  declarations: [LoQueTenemosParaTiPage]
})
export class LoQueTenemosParaTiPageModule {}
