import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { MenuPage } from '../menu/menu.page';
import { UserService } from '../services/user.service';

@Component({
  selector: 'app-convenios',
  templateUrl: './convenios.page.html',
  styleUrls: ['./convenios.page.scss'],
})
export class ConveniosPage implements OnInit {
  convenios: any = [];
  constructor(
    public modalController: ModalController,
    private user: UserService
  ) { 
    this.getAll();
  }

  ngOnInit() {
  }

  public getAll(){
    this.user.convenios().subscribe(resp => {
      console.log(resp)
      this.convenios = resp['data'];
    })
  }

  async openMenu() {
    const modal = await this.modalController.create({
    component: MenuPage
    });
    return await modal.present();
   }

}
