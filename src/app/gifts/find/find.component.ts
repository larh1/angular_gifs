import { HttpClient } from '@angular/common/http';
import { Component, ElementRef, Input, ViewChild } from '@angular/core';import { GifService } from '../service/gif.service';
;

@Component({
  selector: 'app-find',
  templateUrl: './find.component.html',
})
export class FindComponent {
  @ViewChild('txtBuscar') txtBusar!: ElementRef<HTMLInputElement>;
  constructor(private _giftService: GifService, private client: HttpClient) {}

  Buscar(buscar: String) {
    if (buscar.trim() == '') return;

    // Añadir a historial
    this._giftService.Agregar(buscar);
    this._giftService.Buscar(buscar);
    this.txtBusar.nativeElement.value = '';
  }
}
