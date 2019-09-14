import { Component, OnInit } from '@angular/core';
import { PreguntasService } from '../servicios/preguntas.service';
import { Pregunta } from '../models/preguntas';
import { Router } from '@angular/router';

@Component({
  selector: 'app-preguntas',
  templateUrl: './preguntas.page.html',
  styleUrls: ['./preguntas.page.scss']
})
export class PreguntasPage implements OnInit {
  preguntas: Pregunta[];
  respuestas: any;
  checked: boolean[];
  win: number;
  fail: number;

  constructor(private service: PreguntasService, private router: Router) {
    this.respuestas = [];
    this.preguntas = this.service.getJSON();
    this.checked = [];
    this.checked.fill(false);
    this.win = 0;
    this.fail = 0;
  }

  ngOnInit() {
    this.respuestas = [];
    this.preguntas = this.service.getJSON();

    for (let i = 0; i < this.preguntas.length; i++) {
      this.pushRespuestas(i);
    }
  }

  pushRespuestas(num: number) {
    this.respuestas[num] = this.preguntas[num].incorrect_answers;
    this.respuestas[num].push(this.preguntas[num].correct_answer);
    console.log(this.respuestas[num]);
  }

  validate(res, i) {
    if (res === this.respuestas[i][3]) {
      this.service.addWin();
      console.log(res, this.respuestas[i][3]);
    } else {
      this.service.addFail();
    }
    this.check(i);
  }

  check(i) {
    this.checked[i] = true;
    this.win = this.service.getWin();
    this.fail = this.service.getFail();
    console.log(this.win, this.fail);

    if (this.win + this.fail === this.preguntas.length) {
      return this.router.navigateByUrl('/resultados');
    }
  }
}
