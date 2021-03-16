import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { MenuPage } from '../menu/menu.page';

@Component({
  selector: 'app-el-mejor-equipo',
  templateUrl: './el-mejor-equipo.page.html',
  styleUrls: ['./el-mejor-equipo.page.scss'],
})
export class ElMejorEquipoPage implements OnInit {

  constructor(
    public modalController: ModalController,

  ) { }

  ngOnInit() {
  }
  async openMenu() {
    const modal = await this.modalController.create({
    component: MenuPage
    });
    return await modal.present();
  }


}
