import * as geometria from './geometria';

let perimetro=geometria.perimetro(5);
let area = geometria.areaCirculo(5); // Utilizando la función del módulo importado
console.log(area); // Salida: 78.54
console.log(perimetro);
console.log(geometria.PI); // Utilizando la constante del módulo importado