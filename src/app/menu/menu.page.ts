import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ModalController } from '@ionic/angular';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.page.html',
  styleUrls: ['./menu.page.scss'],
})
export class MenuPage implements OnInit {
  historiaOpen : Boolean = false;
  saludOpen: Boolean = false;

  constructor(
    public viewCtrl: ModalController,
    public router: Router
  ) { }

  ngOnInit() {
  }

  close(){
    this.viewCtrl.dismiss();
  }

  conocenos(){
    this.router.navigateByUrl('/conocenos');

    this.viewCtrl.dismiss();


  }
  manteles(){

    this.router.navigateByUrl('/de-manteles-largos');
    this.viewCtrl.dismiss();


  }
  open3(){
    this.historiaOpen = !this.historiaOpen
  }
  historia(){
    this.router.navigateByUrl('/tu-historia');
    this.viewCtrl.dismiss();
  }

  generacion(){
    this.router.navigateByUrl('/generacion');
    this.viewCtrl.dismiss();
  }
  muro(){
    this.router.navigateByUrl('/muro-del-desarrollo');
    this.viewCtrl.dismiss();
  }
  eventos(){
    this.router.navigateByUrl('/eventos');
    this.viewCtrl.dismiss();
  }
  paraTi(){
    this.router.navigateByUrl('/lo-que-tenemos-para-ti');
    this.viewCtrl.dismiss();
  }
  salud(){
    this.saludOpen = !this.saludOpen;
  }
  informacion(){
    this.router.navigateByUrl('/informacion-que-cura');
    this.viewCtrl.dismiss();
  }
  saludMes(){
    this.router.navigateByUrl('/salud');
    this.viewCtrl.dismiss();
  }
  para(){
    this.router.navigateByUrl('/salud-mes');
    this.viewCtrl.dismiss();
  }
  convenios(){
    this.router.navigateByUrl('/convenios');
    this.viewCtrl.dismiss();
  }
  cajon(){
    this.router.navigateByUrl('/los-de-cajon');
    this.viewCtrl.dismiss();
  }
  aquiEstamos(){
    this.router.navigateByUrl('/aqui-estamos');
    this.viewCtrl.dismiss();
  }
  covid(){
    this.router.navigateByUrl('/linea-covid');
    this.viewCtrl.dismiss();
  }

  profile(){
    this.router.navigateByUrl('/profile');
    this.viewCtrl.dismiss();
  }


}
