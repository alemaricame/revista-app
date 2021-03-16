import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { MenuPage } from '../menu/menu.page';
import { ViewPlayerPage } from '../view-player/view-player.page';

@Component({
  selector: 'app-conocenos',
  templateUrl: './conocenos.page.html',
  styleUrls: ['./conocenos.page.scss'],
})
export class ConocenosPage implements OnInit {
  menu = false;
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
