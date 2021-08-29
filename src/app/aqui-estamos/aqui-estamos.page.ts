import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { MenuPage } from '../menu/menu.page';

@Component({
  selector: 'app-aqui-estamos',
  templateUrl: './aqui-estamos.page.html',
  styleUrls: ['./aqui-estamos.page.scss'],
})
export class AquiEstamosPage implements OnInit {

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
