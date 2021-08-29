import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ElMejorEquipoPageRoutingModule } from './el-mejor-equipo-routing.module';

import { ElMejorEquipoPage } from './el-mejor-equipo.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ElMejorEquipoPageRoutingModule
  ],
  declarations: [ElMejorEquipoPage]
})
export class ElMejorEquipoPageModule {}
