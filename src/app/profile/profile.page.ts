import { Component, OnInit } from '@angular/core';
import { Storage } from '@ionic/storage';
import { CameraResultType, CameraSource, Plugins } from '@capacitor/core';
import { DomSanitizer, SafeResourceUrl } from '@angular/platform-browser';
import { UserService } from '../services/user.service';
import { ToastController } from '@ionic/angular';
import { Router } from '@angular/router';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.page.html',
  styleUrls: ['./profile.page.scss'],
})
export class ProfilePage implements OnInit {
  dataUser: any = [];
  photo: SafeResourceUrl;

  constructor(
    private storage: Storage,
    private sanitizer: DomSanitizer,
    private profile: UserService,
    public toastController: ToastController,
    public router: Router

  ) {
    this.storage.get('data').then((data)=>{
      console.log('data user', data)
      this.dataUser = data;
      console.log('this', this.dataUser)
      
    });
   }

  ngOnInit() {
  }

  async take(){
    const image = await Plugins.Camera.getPhoto({
      quality: 100,
      allowEditing: false,
      resultType: CameraResultType.DataUrl,
      source: CameraSource.Camera
    });
    this.photo = this.sanitizer.bypassSecurityTrustResourceUrl(image && (image.dataUrl))
  }

  edit(){
    console.log(this.dataUser);
    this.profile.editUser(this.dataUser)
    .subscribe(resp=> {
      this.presentToast('Editado correctamente')
      this.dataUser.data = resp;
    }, err => {
      this.presentToast('Intentelo mas tarde')
    })
  }

  async presentToast(send) {
    const toast = await this.toastController.create({
      message: send,
      duration: 2000
    });
    toast.present();
  }

  back(){
    this.router.navigateByUrl('/contenido')
  }

}
