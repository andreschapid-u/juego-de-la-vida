import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl} from "@angular/forms";
import { JuegoDeLaVida } from './juego-de-la-vida';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit  {
  title = 'JuegoVida';

  public juego: JuegoDeLaVida;
  isPlaying: boolean;
  intervalId: any;
  generaciones: number;
  velocidad: number;

  constructor() {
    this.juego = new JuegoDeLaVida(50, 50);
    this.juego.inicializarAleatoriamente();
    this.isPlaying = false;
    this.generaciones = 0;
    this.velocidad = 500;
  }

  ngOnInit(): void {
  }

  play() {
    this.isPlaying = true;
    this.intervalId = setInterval(() => {
      this.juego.siguientePaso();
      this.generaciones++;
    }, 1000 - this.velocidad);
  }

  stop() {
    this.isPlaying = false;
    clearInterval(this.intervalId);
  }

  reiniciar(){
    this.stop();
    this.juego = new JuegoDeLaVida(50, 50);
    this.juego.inicializarAleatoriamente();
    this.generaciones = 0;
  }
}
