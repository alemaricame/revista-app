import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ModalController } from '@ionic/angular';
import { MenuPage } from '../menu/menu.page';

@Component({
  selector: 'app-de-manteles-largos',
  templateUrl: './de-manteles-largos.page.html',
  styleUrls: ['./de-manteles-largos.page.scss'],
})
export class DeMantelesLargosPage implements OnInit {

  constructor(
    private router : Router,
    public modalController: ModalController,

  ) { }

  ngOnInit() {
  }

  cumpleanos(){
    this.router.navigateByUrl('/cumpleanos-mes')
  }
  elMejorEquipo(){
    this.router.navigateByUrl('/el-mejor-equipo')
  }

  premioALaExcelencia(){
    this.router.navigateByUrl('/premio-a-la-excelencia')
  }
  
  async openMenu() {
    const modal = await this.modalController.create({
    component: MenuPage
    });
    return await modal.present();
  }

}
