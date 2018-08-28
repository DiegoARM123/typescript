"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var producto_1 = require("./producto");
var dias_1 = require("./dias");
var decoradores_1 = require("./decoradores");
var producto = new producto_1.Producto("samsung");
console.log(dias_1.dias);
var App = /** @class */ (function () {
    function App() {
        //number
        this.compilacion = 1.0;
        console.log('Aplicacion funcionando...');
        this.version = "1.0";
        this.estado = true;
        this.estado = 1;
        this.desconocido = true; // cualquier tipo de dato;
        this.miEstado = 1;
    }
    App = __decorate([
        decoradores_1.Registro
    ], App);
    return App;
}());
new App();
