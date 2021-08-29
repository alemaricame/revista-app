import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { MenuPage } from '../menu/menu.page';

@Component({
  selector: 'app-eventos',
  templateUrl: './eventos.page.html',
  styleUrls: ['./eventos.page.scss'],
})
export class EventosPage implements OnInit {
  cards = [
    {
      type: '#VOLUNTARIADO',
      description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quibusdam fugit sit corrupti pariatur impedit eum laboriosam quaerat.'
    },
    {
      type: '#PRO',
      description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quibusdam fugit sit corrupti pariatur impedit eum laboriosam quaerat.'
    },
    {
      type: '#PRO',
      description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quibusdam fugit sit corrupti pariatur impedit eum laboriosam quaerat.'
    },
    {
      type: '#VOLUNTARIADO',
      description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quibusdam fugit sit corrupti pariatur impedit eum laboriosam quaerat.'
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
