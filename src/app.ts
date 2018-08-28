import { Producto } from './producto'
import {dias } from './dias'
import { Registro } from './decoradores'

var producto = new Producto("samsung");
console.log(dias);

type estado =  boolean | number;

@Registro
class App {
    //string
    version: string;

    //number
    compilacion: number = 1.0;

    //boolean
    estado: boolean | number;

    miEstado: estado;
    //any
    desconocido:any
    constructor(){
        console.log('Aplicacion funcionando...');
        this.version = "1.0";
        this.estado = true;
        this.estado = 1;
        this.desconocido = true; // cualquier tipo de dato;
        this.miEstado = 1;
    }
}

new App();