import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-conocenos',
  templateUrl: './conocenos.page.html',
  styleUrls: ['./conocenos.page.scss'],
})
export class ConocenosPage implements OnInit {
  menu = false;
  constructor() { }

  ngOnInit() {
  }

  openMenu(){
    this.menu = !this.menu;
  }

}
