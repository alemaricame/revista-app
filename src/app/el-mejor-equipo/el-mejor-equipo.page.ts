import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { MenuPage } from '../menu/menu.page';
import { UserService } from '../services/user.service';

@Component({
  selector: 'app-el-mejor-equipo',
  templateUrl: './el-mejor-equipo.page.html',
  styleUrls: ['./el-mejor-equipo.page.scss'],
})
export class ElMejorEquipoPage implements OnInit {
  sliderOpts = {
    grabCursor: true,
    zoom: false,
    slidesPerView: 1.5,
    spaceBetween: 80,
    centeredSlides: true,
    pagination: true,
    paginationType: 'bullets',
    cubeEffect: {
      shadow: true,
      slideShadows: true,
      shadowOffset: 20,
      shadowScale: 0.94,
    },
  };
  elMejorEquipoData;
  text;
  base64Data;
  converted_image;
  constructor(
    public modalController: ModalController,
    private users: UserService
 
  ) { 
    this.getMejorEquipo();
  }

  ngOnInit() {
  }
  async openMenu() {
    const modal = await this.modalController.create({
    component: MenuPage
    });
    return await modal.present();
  }

  getMejorEquipo(){
    this.users.getElMejorEquipo().subscribe(data=>{
      this.elMejorEquipoData = data['data'];
      console.log('data', this.elMejorEquipoData);
      this.text = this.elMejorEquipoData.text;
      this.base64Data= this.elMejorEquipoData.image.data;
      //this.converted_image= "data:image/jpg;base64,"+this.base64Data;    
      console.log(this.converted_image)


      var imageData = btoa(this.elMejorEquipoData.image.data);

      console.log(imageData)

      let logo = "data:image/png;base64,"+imageData
      logo =  logo.replace(new RegExp(' ', 'g'), '+');
      this.converted_image = logo;
      console.log("-------------------")

      console.log(logo)
    })
  }

}
