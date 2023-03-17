import { Component } from "@angular/core";

@Component({
  selector: 'app-tab2',
  templateUrl: 'tab2.page.html',
  styleUrls: ['tab2.page.scss']
})


export class Tab2Page {

  ponto = 1;
  time1 = 0;
  time2 = 0;

  constructor() {}

  botao1(){
    this.ponto = 1;
  }
  botao3(){
    this.ponto = 3;
  }
  botao6(){
    this.ponto = 6;
  }

  botao9(){
    this.ponto = 9;
  }

  botao12(){
    this.ponto = 12;
  }


  maistime1(){
    this.time1 =this.time1 + this.ponto;
  }
  menostime1(){
    this.time1 =this.time1 - this.ponto;

    if(this.ponto < 0){
      this.time1 = 0;
    }

  }

  maistime2(){
    this.time2 =this.time2 + this.ponto;
  }

  menostime2(){
    this.time2 =this.time2 - this.ponto;

    if(this.ponto < 0){
      this.time2 = 0;
    }
  }

}
