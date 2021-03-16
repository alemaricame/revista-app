import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { MenuPage } from '../menu/menu.page';

@Component({
  selector: 'app-cumpleanos-mes',
  templateUrl: './cumpleanos-mes.page.html',
  styleUrls: ['./cumpleanos-mes.page.scss'],
})
export class CumpleanosMesPage implements OnInit {

  users = [
    {
      name: "Patricia Rivera",
      fecha: "14 de marzo"
    },
    {
      name: "Jorge Alvarado",
      fecha: "14 de marzo"
    },
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
