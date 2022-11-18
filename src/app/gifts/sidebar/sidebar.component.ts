import { Component, OnInit } from '@angular/core';
import { GifService } from '../service/gif.service';


@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css'],
})
export class SidebarComponent {
  constructor(public serviceGif: GifService) {}

  get historial() {
    return this.serviceGif.Historial;
  }

  Buscar(palabra:String)
  {
    this.serviceGif.Buscar(palabra);
  }
}
