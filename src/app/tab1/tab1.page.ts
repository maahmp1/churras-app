import { Component } from '@angular/core';

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})
export class Tab1Page {

  cara = 'src/assets/cara.png';
  coroa = 'src/assets/coroa.png';
  logo = 'src/assets/logo.png';
  image = this.logo;
  info = 'Clique no botão para jogar!';

  constructor() { }

  jogarMoeda() {
    if (Math.random() < 0.5){
      this.image = this.cara;
      this.info = "Cara!"

    } else {
      this.image = this.coroa;
      this.info = "Coroa!"
    }
  }
}

