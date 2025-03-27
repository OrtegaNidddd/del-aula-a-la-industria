/*
Escenario 1 - Carpark
Nick Ortega

    1 = Staircases
    2 = Start Position
    0 = Empty (no car)

Se asume que la escalera siempre va estar la parte mas a la izquierda
El piso de salida no tiene escalera y su salida es la parte mas a la derecha
El "2" puede estar en cualquier posicion excepto en una escalera

*/

const carpark = [
    [1, 0, 0, 0, 2], 
    [0, 0, 0, 0, 0] 
];

console.table(carpark);

let filaInicial, columnaInicial;

for (let i = 0; i < carpark.length; i++) {
    let columna = carpark[i].indexOf(2);

    if (columna !== -1) {
        filaInicial = i;
        columnaInicial = columna;

        console.log('Fila Inicial: ' + filaInicial);
        console.log('Columna Inicial: ' + columnaInicial);
        break;
    }
}

let movimientos = [];

if (columnaInicial > 0) {
    movimientos.push('L' + columnaInicial);
}

if (filaInicial < carpark.length - 1) {
    movimientos.push('D' + (carpark.length - filaInicial - 1));
}

let tamanoUltimaFila = carpark[0].length;
movimientos.push('R' + (tamanoUltimaFila - 1));

console.log(movimientos);