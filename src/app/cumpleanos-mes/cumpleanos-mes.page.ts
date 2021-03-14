import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-cumpleanos-mes',
  templateUrl: './cumpleanos-mes.page.html',
  styleUrls: ['./cumpleanos-mes.page.scss'],
})
export class CumpleanosMesPage implements OnInit {

  users = [
    {
      name: "Patricia Rivera",
      fecha: "14 de marzo"
    },
    {
      name: "Jorge Alvarado",
      fecha: "14 de marzo"
    },
  ]
  constructor() { }

  ngOnInit() {
  }

}
