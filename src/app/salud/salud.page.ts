import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { MenuPage } from '../menu/menu.page';

@Component({
  selector: 'app-salud',
  templateUrl: './salud.page.html',
  styleUrls: ['./salud.page.scss'],
})
export class SaludPage implements OnInit {

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
