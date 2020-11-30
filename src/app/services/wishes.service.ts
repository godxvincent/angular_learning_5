import { JsonPipe } from '@angular/common';
import { Injectable } from '@angular/core';
import { List } from '../models/list.model';

@Injectable({
  providedIn: 'root'
})
export class WishesService {

  listas: List[] = [];
  constructor() {
    this.cargarStorage();
   }

   crearLista(titulo: string) {
    const lista = new List(titulo);
    this.listas.push(lista);
    this.guardarStorage();
   }

   guardarStorage() {
    localStorage.setItem('datosLista', JSON.stringify(this.listas));
   }

   cargarStorage() {

    if ( localStorage.getItem('datosLista') ) {
      this.listas = JSON.parse ( localStorage.getItem('datosLista') );
    }

   }
}
