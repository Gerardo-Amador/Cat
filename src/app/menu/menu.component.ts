import {Component, EventEmitter, Output, Input } from '@angular/core';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent{  
  @Output() va= new EventEmitter<number[]>();
  
  vei:number[]=[0,0,0,0];
  cm:number=0; //Es el contador de juegos
  inifin:number=0;
  cbn:number=3;
  jug:number=0;
  svf:boolean=false;  //Bloqueo de la lista desplegable
  oie:string[]=["Maquina: X","Humano: O","Aleatoreo","Jugar", "Reintentar","Terminar"];
  enviar(){
    //let oie:string[]=["Humano: O","Maquina: x","Aleatoreo","Jugar", "Reintentar","Terminar"];
    //this.cm++; //Aumrnta cada vez conforme se juega.    
    if(this.inifin==1){
      this.inifin=0;
      this.cbn=3;
      this.svf=false;
      this.cm++; //Aumenta cada vez conforme se juega.
    }else{
      this.inifin=1;
      this.cbn=6;
      this.svf=true;
    }
    //this.vei=[this.inifin, this.cm]; //Reune el cero en el contador de juegos.
    this.vei=[this.inifin, this.cm,0,this.jug];
    this.va.emit(this.vei); //Emite el aray cargado de vei/
    console.log("Jugador: " + this.vei);
  }
  turno(e: Event){
    this.jug=(parseInt((e.target as HTMLInputElement).value));
    console.log(this.jug);
  }
}
