"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    }
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
var producto_1 = require("./producto");
var Telefono = /** @class */ (function (_super) {
    __extends(Telefono, _super);
    function Telefono(marca, tamaño) {
        var _this = _super.call(this, marca) || this;
        _this.tamaño = tamaño;
        console.log("instancia de telefono");
        return _this;
    }
    Telefono.prototype.encender = function () {
        return "Pantalla encendida...";
    };
    Telefono.prototype.apagar = function () {
        return "apagar...";
    };
    return Telefono;
}(producto_1.Producto));
