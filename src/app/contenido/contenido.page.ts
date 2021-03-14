import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ModalController } from '@ionic/angular';
import { ViewPlayerPage } from '../view-player/view-player.page';

@Component({
  selector: 'app-contenido',
  templateUrl: './contenido.page.html',
  styleUrls: ['./contenido.page.scss'],
})
export class ContenidoPage implements OnInit {

  constructor(
    private router: Router,
    public modalController: ModalController

  ) { }

  ngOnInit() {
    this.openModal();
  }
  async openModal() {
    const modal = await this.modalController.create({
    component: ViewPlayerPage
    });
    return await modal.present();
   }
  conocenos(){
    this.router.navigateByUrl('/conocenos')
  }
  manteles(){
    this.router.navigateByUrl('/de-manteles-largos')
  }
  historia(){
    this.router.navigateByUrl('/tu-historia')
  }
  muro(){
    this.router.navigateByUrl('/muro-del-desarrollo')
  }
  eventos(){
    this.router.navigateByUrl('/eventos')
  }
  paraTi(){
    this.router.navigateByUrl('/lo-que-tenemos-para-ti')
  }
  salud(){
    this.router.navigateByUrl('/salud')
  }
  logout(){
    this.router.navigateByUrl('/portada')

  }

}
