import { ChangeDetectorRef, Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AlertController } from '@ionic/angular';
import { List } from '../../models/list.model';
import { WishesService } from '../../services/wishes.service';

@Component({
  selector: 'app-lists',
  templateUrl: './lists.component.html',
  styleUrls: ['./lists.component.scss'],
})
export class ListsComponent {

  @Input() principal = true;
  listasDeseos: List [] = [];

  constructor(public wishService: WishesService,
              private router: Router,
              private ref: ChangeDetectorRef) {
    this.listasDeseos = this.wishService.listas;
  }

  modificarLista(item: List) {
    console.log(item);
    if ( this.principal ) {
      this.router.navigateByUrl(`/tabs/tab1/add/${ item.id }`);
    } else {
      this.router.navigateByUrl(`/tabs/tab2/add/${ item.id }`);
    }
  }

  borrarLista(item: List) {
    console.log(item);
    this.wishService.borrarLista( item );
    this.listasDeseos = this.wishService.listas;
  }

}
