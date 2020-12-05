import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ListsComponent } from './lists/lists.component';
import { IonicModule } from '@ionic/angular';
import { PipesModule } from '../pipes/pipes.module';



@NgModule({
  declarations: [
    ListsComponent
  ],
  exports: [
    ListsComponent
  ],
  imports: [
    CommonModule, // Se usa para importar el ngIf y ngFor
    IonicModule,
    PipesModule
  ]
})
export class ComponentsModule { }
