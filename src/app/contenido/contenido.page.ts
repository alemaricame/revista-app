import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ModalController } from '@ionic/angular';
import { Storage } from '@ionic/storage';
import { InitPage } from '../init/init.page';

@Component({
  selector: 'app-contenido',
  templateUrl: './contenido.page.html',
  styleUrls: ['./contenido.page.scss'],
})
export class ContenidoPage implements OnInit {
  flag;
  constructor(
    private router: Router,
    private storage: Storage,
    public modalController: ModalController
  ) { 
    console.log(this.storage.get('data'))
    const name = storage.get('data');
    this.storage.get('data').then((data)=>{
      if(!data.photo){
        this.modal();
      }
    });
		//console.log(this.flag);

  }

  async modal(){
    const modal = await this.modalController.create({
      component: InitPage,
      cssClass: 'my-custom-class'
    });
    return await modal.present();
  }

  ngOnInit() {
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
