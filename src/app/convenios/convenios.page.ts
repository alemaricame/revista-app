import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { MenuPage } from '../menu/menu.page';

@Component({
  selector: 'app-convenios',
  templateUrl: './convenios.page.html',
  styleUrls: ['./convenios.page.scss'],
})
export class ConveniosPage implements OnInit {

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
