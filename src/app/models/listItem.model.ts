export class ListItem {
    descripcion: string;
    completado: boolean;
    constructor( descripcion: string) {
        this.descripcion = descripcion;
        this.completado = false;
    }
}
