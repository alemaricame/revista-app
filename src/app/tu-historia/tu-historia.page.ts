import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { MenuPage } from '../menu/menu.page';

@Component({
  selector: 'app-tu-historia',
  templateUrl: './tu-historia.page.html',
  styleUrls: ['./tu-historia.page.scss'],
})
export class TuHistoriaPage implements OnInit {

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
