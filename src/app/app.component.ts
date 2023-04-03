import { Component } from "@angular/core";

@Component({
    selector: 'app-root', //Rama principal
    templateUrl: './app.componentes.html', //indexamos el archivo HTML
    styleUrls: ['./app.componentes.css'] //indexamos el archivo CSS
})

export class AppComponent{
    rcjp:number=0; //para el contador
    rjsn:number=0; //iniciar o finalizar
    rjug:number=0; //jugar
    metodopadre(rv: number[]){
        this.rjsn=rv[0];
        this.rcjp=rv[1]; //Puntuacion
        this.rjug=rv[2];
    }
}