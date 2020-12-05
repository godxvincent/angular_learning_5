import { Component, Input, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { AlertController, IonList } from '@ionic/angular';
import { List } from '../../models/list.model';
import { WishesService } from '../../services/wishes.service';

@Component({
  selector: 'app-lists',
  templateUrl: './lists.component.html',
  styleUrls: ['./lists.component.scss'],
})
export class ListsComponent {

  // Esta es una forma de referenciar un elemento del html
  @ViewChild( IonList ) elementoDom: IonList;
  @Input() principal = true;
  listasDeseos: List [] = [];

  constructor(public wishService: WishesService,
              private router: Router,
              private alertController: AlertController) {
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

  async modificarTitulo( item: List ) {
    const alert = await this.alertController.create({
      header: 'Modificar Lista',
      inputs : [
        {
          name: 'titulo',
          type: 'text',
          placeholder: 'nombre de la lista',
          value: item.titulo
        }
      ],
      buttons: [
        {
          text: 'Cancelar',
          role: 'cancel',
          handler: () => {
            console.log('cancelar');
            // Esto cierra cualquier elemento del html que este abierto
            this.elementoDom.closeSlidingItems();
          }
        },
        {
          text: 'Actualizar',
          // Esta data de formulario esta asociado al input creado.
          handler: (dataFormulario ) => {
            console.log( dataFormulario );
            if (dataFormulario.titulo.length === 0) {
              return;
            }
            this.wishService.actualizarLista(dataFormulario.titulo, item);
            // Esto cierra cualquier elemento del html que este abierto
            this.elementoDom.closeSlidingItems();
          }
        }
      ]
    });

    alert.present();
  }
}
