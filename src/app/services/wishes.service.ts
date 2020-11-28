import { Injectable } from '@angular/core';
import { List } from '../models/list.model';

@Injectable({
  providedIn: 'root'
})
export class WishesService {

  listas: List[] = [];

  constructor() {
    console.log('servicio inicializado');
   }
}
