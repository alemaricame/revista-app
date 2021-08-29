import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { MenuPage } from '../menu/menu.page';
import { UserService } from '../services/user.service';

@Component({
  selector: 'app-premio-a-la-excelencia',
  templateUrl: './premio-a-la-excelencia.page.html',
  styleUrls: ['./premio-a-la-excelencia.page.scss'],
})
export class PremioALaExcelenciaPage implements OnInit {

  excelencia: any = [];
  constructor(
    public modalController: ModalController,
    private userServices: UserService
  ) { 
    this.getExcelencia();
  }

  ngOnInit() {
  }

  async openMenu() {
    const modal = await this.modalController.create({
      component: MenuPage
    });
    return await modal.present();
  }

  getExcelencia(){
    this.userServices.getExcelencia().subscribe(data=>{
      console.log('excelencia', data['data'])
      this.excelencia = data['data']
    })
  }

}
