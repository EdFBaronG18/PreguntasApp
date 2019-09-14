import { Injectable } from '@angular/core';
import { Pregunta } from '../models/preguntas';

@Injectable({
  providedIn: 'root'
})
export class PreguntasService {
  win: number;
  fail: number;

  dataJson: Pregunta[];

  constructor() {
    this.win = 0;
    this.fail = 0;
  }

  setJson(preguntas: string) {
    const res = JSON.parse(preguntas);
    this.dataJson = res.results;
  }

  getJSON() {
      return this.dataJson;
  }

  addWin() {
    this.win++;
  }

  addFail() {
    this.fail++;
  }

  getWin() {
    return this.win;
  }

  getFail() {
    return this.fail;
  }
}
