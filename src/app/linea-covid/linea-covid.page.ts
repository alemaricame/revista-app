import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { MenuPage } from '../menu/menu.page';

@Component({
  selector: 'app-linea-covid',
  templateUrl: './linea-covid.page.html',
  styleUrls: ['./linea-covid.page.scss'],
})
export class LineaCovidPage implements OnInit {

  sliderOpts = {
    zoom: {
      maxRatio: 2
    }
  }

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
