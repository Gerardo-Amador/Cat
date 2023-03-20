import { Component, Input, Output } from '@angular/core';

@Component({
  selector: 'app-gato',
  templateUrl: './gato.component.html',
  styleUrls: ['./gato.component.css']
})
export class GatoComponent {
  @Input() vson:number=0;
  @Input() vjug:number=0;
  limpiando:string[]=["","","","","","","","",""];
  
  
  @Output() mensajemenu:String=""
  var:string='';
  
  contenido(g:number){
      if(this.vson==1){
        if(this.vjug==0){
          this.limpiando[g]="O";
          this.vjug=1;
        }else{
          for(let info of this.limpiando){
              this.vjug=Math.ceil(Math.random() * (8 - 0) + 0);
              if(this.limpiando[this.vjug]==""){
                this.limpiando[this.vjug]="X";
                this.vjug=0;
                return;
              }
          }
          //this.limpiando[g]="x";
          //this.vjug=0;
        }
        //this.limpiando=["x","x","x","x","x","x","x","x","x"];
        //this.limpiando[g]="x";
      }else{
        this.limpiando=["","","","","","","","",""];
      }
  }

  limpiar(){
    this.limpiando=["","","","","","","","",""];
  }
}

