import { Injectable } from '@angular/core';
import { List } from '../models/list.model';

@Injectable({
  providedIn: 'root'
})
export class WishesService {

  listas: List[] = [];
  constructor() {
    const lista1 = new List('Recoletar piedras del infinito');
    const lista2 = new List('Heroes a desaparecer');
    this.listas.push(lista1, lista2);
   }
}
