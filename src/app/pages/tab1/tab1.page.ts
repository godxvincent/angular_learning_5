import { Component } from '@angular/core';
import { WishesService } from '../../services/wishes.service';
import { List } from '../../models/list.model';
import { Router } from '@angular/router';
import { AlertController } from '@ionic/angular';

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})
export class Tab1Page {

  listasDeseos: List [] = [];

  constructor(public wishService: WishesService,
              private router: Router,
              private alertController: AlertController) {
    this.listasDeseos = this.wishService.listas;
  }

  async agregarLista() {
    const alert = await this.alertController.create({
      header: 'Nueva Lista',
      inputs : [
        {
          name: 'titulo',
          type: 'text',
          placeholder: 'nombre de la lista'
        }
      ],
      buttons: [
        {
          text: 'Cancelar',
          role: 'cancel',
          handler: () => { 
            console.log('cancelar');
          }
        },
        {
          text: 'Crear',
          // Esta data de formulario esta asociado al input creado.
          handler: (dataFormulario ) => {
            console.log( dataFormulario );
            if (dataFormulario.titulo.length === 0) {
              return;
            }
            const listaId = this.wishService.crearLista(dataFormulario.titulo);
            this.router.navigateByUrl(`/tabs/tab1/add/${ listaId }`);
          }
        }
      ]
    });

    alert.present();
  }

  modificarLista(item: List) {
    console.log(item);
    this.router.navigateByUrl(`/tabs/tab1/add/${ item.id }`);
  }

}
