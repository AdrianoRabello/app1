
import { Component, OnInit, Input, OnChanges} from '@angular/core';
import { Coracao } from '../shared/coracao.model';

@Component({
  selector: 'app-tentativas',
  templateUrl: './tentativas.component.html',
  styleUrls: ['./tentativas.component.css']
})
export class TentativasComponent implements OnInit {

  public coracoes:Coracao[] = [ 
                                new Coracao(true),
                                new Coracao(true),
                                new Coracao(true),
                              ];

  public coracaoVazio = "/assets/coracao_vazio.png"
  public coracaoCheio = "/assets/coracao_cheio.png"
  @Input() public tentativas:number;



  constructor() {  }

  ngOnInit() {

    console.log(this.tentativas)
  }

  ngOnChanges(){

    if(this.tentativas != this.coracoes.length){

      let indice = this.coracoes.length - this.tentativas;
      
      this.coracoes[indice -1].cheio = false

    }

   console.log(this.tentativas);
  }

}
