import { Producto } from "./producto";

class Telefono extends Producto implements Pantalla{
    encender(): string {
        return "Pantalla encendida...";
    }
    apagar(): string {
        return "apagar...";
    }
    
    tamaño: string;
    constructor(marca:string, tamaño:string){
        super(marca);
        this.tamaño = tamaño;
        console.log("instancia de telefono");
    }
}