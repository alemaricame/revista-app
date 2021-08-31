import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { MenuPage } from '../menu/menu.page';
import { UserService } from '../services/user.service';

@Component({
  selector: 'app-informacion-que-cura',
  templateUrl: './informacion-que-cura.page.html',
  styleUrls: ['./informacion-que-cura.page.scss'],
})
export class InformacionQueCuraPage implements OnInit {
  data: any = [];
  constructor(
    public modalController: ModalController,
    private userService: UserService
  ) { 
    this.getInformation();
  }

  ngOnInit() {
  }

  public getInformation(){
    this.userService.informacionquecura().subscribe(data => {
      console.log('informacion que cura', data)
      this.data = data['data'];
    })

  }
  async openMenu() {
    const modal = await this.modalController.create({
      component: MenuPage
    });
    return await modal.present();
  }

}
