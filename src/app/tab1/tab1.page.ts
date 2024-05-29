import { animate, state, style, transition, trigger } from '@angular/animations';
import { Component } from '@angular/core';

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss'],
  animations: [
    trigger('rotatedState', [
      state('default', style({ transform: 'rotateY(o)'})),
      state('rotated', style({ transform: 'rotateY(-360deg)'})),
      transition('rotated => default', animate('2000ms ease-out')),
      transition('default => rotated', animate('2000ms ease-in'))
    ])
  ]
})

export class Tab1Page {

  cara = 'assets/dog head.png'; // dogs by Sara Paske from <a href="https://thenounproject.com/browse/icons/term/dogs/" target="_blank" title="dogs Icons">Noun Project</a> (CC BY 3.0)
  coroa = 'assets/dog tail.png'; // wagging tail by Sara Paske from <a href="https://thenounproject.com/browse/icons/term/wagging-tail/" target="_blank" title="wagging tail Icons">Noun Project</a> (CC BY 3.0)
  logo = 'assets/coin.png';   // coin by Kantor Tegalsari from <a href="https://thenounproject.com/browse/icons/term/coin/" target="_blank" title="coin Icons">Noun Project</a> (CC BY 3.0)
  image = this.logo; 
  info = 'Click at the button to PLAY!';
  state = 'default';

  constructor() { }

  jogarMoeda(){
    this.info = 'Throwing...';
    this.image = this.logo;
    this.state = this.state === 'default' ? 'rotated' : 'default';

    setTimeout(() => {
      if(Math.random() <0.5){
        this.image = this.cara;
        this.info = "Heads!"
      }else{
        this.image = this.coroa;
        this.info = "Tails!"
      }
    },2000);
  }
}

