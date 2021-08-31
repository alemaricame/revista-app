import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { MenuPage } from '../menu/menu.page';
import { UserService } from '../services/user.service';

@Component({
  selector: 'app-salud-mes',
  templateUrl: './salud-mes.page.html',
  styleUrls: ['./salud-mes.page.scss'],
})
export class SaludMesPage implements OnInit {
  videos: any = [];
  constructor(
    public modalController: ModalController,
    private users: UserService

  ) { }

  ngOnInit() {
    this.getInfo();
  }
  public getInfo(){
    this.users.parqueteanimes().subscribe(dataresp => {
      console.log(dataresp);
      this.videos = dataresp['data'];
    })
  }
  async openMenu() { 
    const modal = await this.modalController.create({
      component: MenuPage
    });
    return await modal.present();
  }

}
