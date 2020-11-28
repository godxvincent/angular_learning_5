import { ListItem } from './listItem.model';

export class List {
    id: number;
    titulo: string;
    creadaEn: Date;
    terminadaEn: Date;
    completada: boolean;
    items: ListItem[];

    constructor( titulo: string ) {
        this.titulo = titulo;
        this.creadaEn = new Date();
        this.completada = false;
        this.items = [];
        this.id = new Date().getTime();
    }
}
