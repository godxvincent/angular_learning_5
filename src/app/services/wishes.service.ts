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
    return lista.id;
   }

   obtenerLista(id: string | number) {
     id = Number(id);
     return this.listas.find( datosDeLaLista => datosDeLaLista.id === id);
   }

   guardarStorage() {
    localStorage.setItem('datosLista', JSON.stringify(this.listas));
   }

   cargarStorage() {
    if ( localStorage.getItem('datosLista') ) {
      this.listas = JSON.parse ( localStorage.getItem('datosLista') );
    }
   }

   borrarLista(lista: List): void {
    this.listas = this.listas.filter( listaData => listaData.id !== lista.id );
    this.guardarStorage();
  }

}
