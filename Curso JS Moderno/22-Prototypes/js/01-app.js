const cliente = {
    nombre: 'willy',
    saldo: 500
}

console.log(cliente);
console.log(typeof cliente);


function Cliente (nombre, saldo){
    this.nombre = nombre;
    this.saldo = saldo;
}

const juan = new Cliente('juan', 500);

console.log(juan)