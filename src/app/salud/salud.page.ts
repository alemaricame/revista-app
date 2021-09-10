import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { MenuPage } from '../menu/menu.page';

@Component({
  selector: 'app-salud',
  templateUrl: './salud.page.html',
  styleUrls: ['./salud.page.scss'],
})
export class SaludPage implements OnInit {
  info_1: Boolean = false;
  info_2: Boolean = false;

  sliderOpts = {
    zoom: {
      maxRatio:2
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

  info1(){
    this.info_1 = !this.info_1;

  }

  info2(){
    this.info_2 = !this.info_2;
  }
}
