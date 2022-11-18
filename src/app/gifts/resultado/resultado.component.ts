import { Component, OnInit } from '@angular/core';
import { GifService } from '../service/gif.service';

@Component({
  selector: 'app-resultado',
  templateUrl: './resultado.component.html',
  styleUrls: ['./resultado.component.css'],
})
export class ResultadoComponent {
  constructor(private giftServicio: GifService) {}

  private get obtener() {
    return [...this.giftServicio.resultados];
  }

  get Resultados() {
    let aux = this.obtener;
    let chunks = [];
    let size = 3;

    while (aux.length > 0) chunks.push(aux.splice(0, size));

    return chunks;
  }

  get ver() {
    return this.obtener.length >= 1;
  }

  get buscado()
  {
    return this.giftServicio.buscado;
  }
}
