import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { MenuPage } from '../menu/menu.page';
import { UserService } from '../services/user.service';

@Component({
  selector: 'app-generacion',
  templateUrl: './generacion.page.html',
  styleUrls: ['./generacion.page.scss'],
})
export class GeneracionPage implements OnInit {
  images = [
    {
      img: ''
    },
    {
      img: ''
    },
    {
      img: ''
    },
    {
      img: ''
    }
  ]

  prodeliTodos: any = []
  constructor(
    public modalController: ModalController,
    private usersService: UserService
  ) { 
    this.getProdeli()
  }

  ngOnInit() {
  }

  async openMenu() {
    const modal = await this.modalController.create({
      component: MenuPage
    });
    return await modal.present();
  }

  getProdeli(){
    this.usersService.getProdeli().subscribe(data=>{
      console.log('prodeli', data)
      this.prodeliTodos = data['data']
    })
  }

}
