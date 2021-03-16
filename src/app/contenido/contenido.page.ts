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
  historiaOpen : Boolean = false;
  saludOpen: Boolean = false;

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
  open3(){
    this.historiaOpen = !this.historiaOpen
  }
  historia(){
    this.router.navigateByUrl('/tu-historia')
  }

  generacion(){
    this.router.navigateByUrl('/generacion')
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
    this.saludOpen = !this.saludOpen;
  }
  informacion(){
    this.router.navigateByUrl('/informacion-que-cura')
  }
  saludMes(){
    this.router.navigateByUrl('/salud')
  }
  para(){
    this.router.navigateByUrl('/salud-mes')
  }
  convenios(){
    this.router.navigateByUrl('/convenios')
  }
  cajon(){
    this.router.navigateByUrl('/los-de-cajon')
  }
  aquiEstamos(){
    this.router.navigateByUrl('/aqui-estamos')
  }
  covid(){
    this.router.navigateByUrl('/linea-covid')
  }

  logout(){
    this.router.navigateByUrl('/portada')

  }

}
