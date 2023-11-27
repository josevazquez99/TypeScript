"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.perimetro = exports.areaCirculo = exports.PI = void 0;
exports.PI = 3.1416;
function areaCirculo(radio) {
    return exports.PI * radio * radio;
}
exports.areaCirculo = areaCirculo;
function perimetro(radio) {
    return exports.PI * radio;
}
exports.perimetro = perimetro;
