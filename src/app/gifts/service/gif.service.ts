import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import {environment} from "src/environments/environment";

@Injectable()
export class GifService {
  /// Historial de búsqueda
  private _historial: String[] = [];

  /// TODO:
  /// Resultados HTTP
  public resultados: any = [];
  private URL: String = 'https://api.giphy.com/v1/gifs/search';
  private API_KEY: String = environment.api_key;
  private LIMIT: Number = 50;
  private _buscado: String = '';

  constructor(private httpClient: HttpClient) {}

  Agregar(nuevo: String) {
    this._historial.push(nuevo);
  }

  Buscar(buscar: String = 'hola') {
    this._buscado = buscar;
    this.httpClient
      .get(
        `${this.URL}?api_key=${this.API_KEY}&q=${buscar}&limit=${this.LIMIT}`
      )
      .subscribe((res: any) => {
        this.resultados = res.data;
      });
  }

  get buscado() {
    return this._buscado;
  }

  get Historial(): String[] {
    return [...this._historial];
  }
}
