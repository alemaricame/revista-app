import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ModalController } from '@ionic/angular';
import { Storage } from '@ionic/storage';

@Component({
  selector: 'app-init',
  templateUrl: './init.page.html',
  styleUrls: ['./init.page.scss'],
})
export class InitPage implements OnInit {
  dataUser;
  constructor(
    public modal: ModalController,
    private router: Router,
    private storage: Storage,

  ) { 
    this.storage.get('data').then((data)=>{
      this.dataUser = data;
    });
  }

  ngOnInit() {
  }

  profile(){
    this.router.navigateByUrl('/profile');
    this.modal.dismiss();

  }
  close(){
    this.modal.dismiss();
  }

}
