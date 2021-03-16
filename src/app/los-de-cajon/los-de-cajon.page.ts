import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { MenuPage } from '../menu/menu.page';

@Component({
  selector: 'app-los-de-cajon',
  templateUrl: './los-de-cajon.page.html',
  styleUrls: ['./los-de-cajon.page.scss'],
})
export class LosDeCajonPage implements OnInit {

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
