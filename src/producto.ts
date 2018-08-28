export class Producto
{
    marca: string;
    constructor(marca:string){
        console.log('instanciando producto');
        this.marca = marca;
    }

    modelo(){
        return "modelo de equipo";
    }
}
