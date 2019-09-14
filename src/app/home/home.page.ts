import { Component } from '@angular/core';
import { PreguntasService } from '../servicios/preguntas.service';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss']
})
export class HomePage {
  data: string;

  constructor(private service: PreguntasService) {
  }

  start() {
    console.log(this.data);
    this.service.setJson(this.data);
    const x = this.service.getJSON();
    console.log(x);
  }
}
