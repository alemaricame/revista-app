import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { MenuPage } from '../menu/menu.page';
import { UserService } from '../services/user.service';
import * as moment from 'moment';

@Component({
  selector: 'app-cumpleanos-mes',
  templateUrl: './cumpleanos-mes.page.html',
  styleUrls: ['./cumpleanos-mes.page.scss'],
})
export class CumpleanosMesPage implements OnInit {

  users: any = [];
  month;
  constructor(
    public modalController: ModalController,
    public usersService: UserService
  ) { 
    this.getUsers();
  }

  ngOnInit() {
   let ex = moment('11.11.1995').format("DD/MM/YYYY");
   
   this.month = new Date();
   console.log(this.month.getMonth()+1)

   //var month = ex.format('M');
  }

  public getUsers(){
    this.usersService.getAllUsers().subscribe(response => {
      console.log(response)
      response['data'].forEach(element => {
        element.date =  moment(element.date).format("MM/DD/YYYY");
        console.log('element', element.date)
        console.log(this.month.getMonth()+1)
        console.log(moment(element.date).date())

        if(moment(element.date).date() === (this.month.getMonth()+1)){
          this.users.push(element);
        }
      });
    })
  }

  async openMenu() {
    const modal = await this.modalController.create({
    component: MenuPage
    });
    return await modal.present();
  }
}
