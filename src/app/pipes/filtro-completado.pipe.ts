import { Pipe, PipeTransform } from '@angular/core';
import { List } from '../models/list.model';

@Pipe({
  name: 'filtroCompletado',
  // Un pipe puro significa que el pipe no va a reflejar en la pantalla actualizaciones sobre los datos que pasen por el.
  // en cambio si se marca como un pipe impuro esto hace que el pipe si actualice la pantalla.
  pure: false
})
export class FiltroCompletadoPipe implements PipeTransform {

  transform(listas: List[], completado: boolean = true ): List[] {
    return listas.filter( elemento => elemento.completada === completado);
  }

}
