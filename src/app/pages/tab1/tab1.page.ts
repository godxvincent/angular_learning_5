import { Component } from '@angular/core';
import { WishesService } from '../../services/wishes.service';
import { List } from '../../models/list.model';
import { Router } from '@angular/router';

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})
export class Tab1Page {

  listasDeseos: List [] = [];

  constructor(public wishService: WishesService, private router: Router) {
    this.listasDeseos = this.wishService.listas;
  }

  agregarLista() {
    this.router.navigateByUrl('/tabs/tab1/add');
  }

}
