import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { WishesService } from '../../services/wishes.service';
import { List } from '../../models/list.model';
import { ListItem } from '../../models/listItem.model';

@Component({
  selector: 'app-add',
  templateUrl: './add.page.html',
  styleUrls: ['./add.page.scss'],
})
export class AddPage implements OnInit {

  lista: List;
  nombreItem: string;
  constructor(private wishesService: WishesService,
              private activatedRoute: ActivatedRoute) {

    // this.activatedRoute.params.subscribe( queryString => {
    //   const listaId = queryString['listaId'];
    //   this.lista = this.wishesService.obtenerLista(listaId);
    // });
    const listaId = this.activatedRoute.snapshot.paramMap.get('listaId');
    this.lista = this.wishesService.obtenerLista(listaId);
  }

  ngOnInit() {
  }

  agregarItem() {
    if ( this.nombreItem.length === 0) {
      return;
    }
    const newListaItem: ListItem = new ListItem(this.nombreItem);
    this.lista.items.push(newListaItem);
    this.nombreItem = '';
    this.wishesService.guardarStorage();
  }

  cambioCheck( item: ListItem ){
    // Todos los objetos en javascript pasan por referencia entonces no debo hacer nada el objeto modificado ya esta referenciado aquí.
    const pendientes = this.lista.items.filter( itemData => !itemData.completado).length;

    if (pendientes === 0 ) {
      this.lista.terminadaEn = new Date();
      this.lista.completada = true;
    } else {
      this.lista.terminadaEn = null;
      this.lista.completada = false;
    }
    this.wishesService.guardarStorage();
  }

  borrarItem(indice: number): void {
    this.lista.items.splice(indice, 1);
    this.wishesService.guardarStorage();
  }

}
