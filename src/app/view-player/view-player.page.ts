import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';

@Component({
  selector: 'app-view-player',
  templateUrl: './view-player.page.html',
  styleUrls: ['./view-player.page.scss'],
})
export class ViewPlayerPage implements OnInit {

  constructor(
    public viewCtrl: ModalController
  ) { }

  ngOnInit() {
  }
  dismiss() {
    this.viewCtrl.dismiss();
  }

}
