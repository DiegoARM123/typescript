"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Producto = /** @class */ (function () {
    function Producto(marca) {
        console.log('instanciando producto');
        this.marca = marca;
    }
    Producto.prototype.modelo = function () {
        return "modelo de equipo";
    };
    return Producto;
}());
exports.Producto = Producto;
