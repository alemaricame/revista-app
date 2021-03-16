import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { MenuPage } from '../menu/menu.page';

@Component({
  selector: 'app-generacion',
  templateUrl: './generacion.page.html',
  styleUrls: ['./generacion.page.scss'],
})
export class GeneracionPage implements OnInit {
  images = [
    {
      img: ''
    },
    {
      img: ''
    },
    {
      img: ''
    },
    {
      img: ''
    }
  ]
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
