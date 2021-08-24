'use strict'

let n = prompt("Cual es la longitud del poligono", 0);
let area;


function areaPoligono(n) {
    if(n<0){
        return false
    }
    return (n*n)+((n-1)*(n-1))
}

alert(areaPoligono(n));