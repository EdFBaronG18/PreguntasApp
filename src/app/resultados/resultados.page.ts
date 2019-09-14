import { Component, OnInit } from '@angular/core';
import { PreguntasService } from '../servicios/preguntas.service';

@Component({
  selector: 'app-resultados',
  templateUrl: './resultados.page.html',
  styleUrls: ['./resultados.page.scss']
})
export class ResultadosPage implements OnInit {
  win: number;
  fail: number;

  constructor(private service: PreguntasService) {}

  ngOnInit() {
    this.win = this.service.getWin();
    this.fail = this.service.getFail();
  }

  restart() {
    this.service.win = 0;
    this.service.fail = 0;
  }
}
