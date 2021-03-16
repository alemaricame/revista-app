import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { MenuPage } from '../menu/menu.page';

@Component({
  selector: 'app-salud-mes',
  templateUrl: './salud-mes.page.html',
  styleUrls: ['./salud-mes.page.scss'],
})
export class SaludMesPage implements OnInit {

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
