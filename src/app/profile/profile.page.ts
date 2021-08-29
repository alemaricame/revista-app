import { Component, OnInit } from '@angular/core';
import { Storage } from '@ionic/storage';
import { CameraResultType, CameraSource, Plugins } from '@capacitor/core';
import { DomSanitizer, SafeResourceUrl } from '@angular/platform-browser';

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

}
