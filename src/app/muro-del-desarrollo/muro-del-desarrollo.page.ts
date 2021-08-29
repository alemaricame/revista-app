import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { MenuPage } from '../menu/menu.page';

@Component({
  selector: 'app-muro-del-desarrollo',
  templateUrl: './muro-del-desarrollo.page.html',
  styleUrls: ['./muro-del-desarrollo.page.scss'],
})
export class MuroDelDesarrolloPage implements OnInit {

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
