import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { MenuPage } from '../menu/menu.page';

@Component({
  selector: 'app-lo-que-tenemos-para-ti',
  templateUrl: './lo-que-tenemos-para-ti.page.html',
  styleUrls: ['./lo-que-tenemos-para-ti.page.scss'],
})
export class LoQueTenemosParaTiPage implements OnInit {

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
