import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { MenuPage } from '../menu/menu.page';

@Component({
  selector: 'app-premio-a-la-excelencia',
  templateUrl: './premio-a-la-excelencia.page.html',
  styleUrls: ['./premio-a-la-excelencia.page.scss'],
})
export class PremioALaExcelenciaPage implements OnInit {

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
