import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ToastController } from '@ionic/angular';
import { Storage } from '@ionic/storage';
import { UserService } from '../services/user.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {

  num_empleado; 
  password;

  constructor(
    public toastController: ToastController,
    private users: UserService,
    private router: Router,
    private storage: Storage
  ) { 
    this.users.example().subscribe(data => {
      console.log('data', data)
    })
  }

  ngOnInit() {
    this.storage.create();
  }

  logForm(){
    if(this.num_empleado && this.password){
      let data = {
        num_empleado: this.num_empleado,
        password: this.password
      }
      this.users.loginUser(data).subscribe(resp => {
        if(resp['status']){
          console.log('data', resp['data'])

          this.storage.set('data', resp['data']);
          this.router.navigateByUrl('/contenido')
        }
      }, err =>{
        console.log('err', err.error['message'])
        this.presentToast(err.error['message']);
      })
    }else{
      this.presentToast('Escribe los datos necesarios')
    }
  }

  async presentToast(send) {
    const toast = await this.toastController.create({
      message: send,
      duration: 2000
    });
    toast.present();
  }

  back(){
    this.router.navigateByUrl('/portada')
  }

}
