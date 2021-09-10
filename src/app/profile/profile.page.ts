import { Component, OnInit } from '@angular/core';
import { Storage } from '@ionic/storage';
import { Camera, CameraResultType, CameraSource, Filesystem, Plugins } from '@capacitor/core';
import { DomSanitizer, SafeResourceUrl } from '@angular/platform-browser';
import { UserService } from '../services/user.service';
import { ToastController } from '@ionic/angular';
import { Router } from '@angular/router';
import {decode} from "base64-arraybuffer";

@Component({
  selector: 'app-profile',
  templateUrl: './profile.page.html',
  styleUrls: ['./profile.page.scss'],
})
export class ProfilePage implements OnInit {
  dataUser: any = [];
  photo: SafeResourceUrl;

  password: String ="";
  newPassword: String = "";

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
      source: CameraSource.Camera,
    })
    console.log(CameraSource)
    console.log(CameraResultType)
    console.log(image.format)
    this.photo = this.sanitizer.bypassSecurityTrustResourceUrl(image && (image.dataUrl))

    const formData = new FormData();
    //formData.append("file", image);

    this.profile.picture(formData).subscribe(resp=> {
          console.log(resp)
    })
  //   const formData = new FormData();
  //   for (var i = 0; i < image.length; i++) {
  //     formData.append("file", image[i], image[i].name);
  // }

  //  formData.append('id', this.dataUser['id']);
  }

  
  edit(){
    console.log(this.password, this.newPassword)
    let changePassword = {
      no_personal: this.dataUser.no_personal,
      password: this.password,
      newPassword: this.newPassword
    }

    this.profile.editPassword(changePassword).subscribe(dataResp=> {
      console.log(dataResp)
      this.presentToast('Editaste tu contraseña correctamente')
      this.password = "";
      this.newPassword = "";
    }, err => {
      console.log(err.error.message)
      this.presentToast(err.error.message)
    })
    // console.log(this.dataUser);
    // this.profile.editUser(this.dataUser)
    // .subscribe(resp=> {
    //   this.presentToast('Editado correctamente')
    //   this.dataUser.data = resp;
    // }, err => {
    //   this.presentToast('Intentelo mas tarde')
    // })
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
