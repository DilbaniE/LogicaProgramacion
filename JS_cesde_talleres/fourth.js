var producto1 = parseInt(prompt("dijite valor del producto 1"));
var producto2 = parseInt(prompt("dijite valor del producto 2"));
var producto3 = parseInt(prompt("dijite valor del producto 3"));


var pago= parseInt(prompt("dijite su manera de pago, 1: pago en efectivo, 2: pago con cupon, 3: pago a credito"));

switch(pago){
    case 1:
        var suma = (producto1 + producto2 + producto3);
        document.write("el valor a pagar es: " + suma);
        break;
    case 2:
        var suma = (producto1 + producto2 + producto3); 
        var descuento = suma * 0.03;
        var total = suma - descuento;
        document.write("el valor a pagar es: " + total);
        break;
    case 3: 
        var suma = (producto1 + producto2 + producto3); 
        var iva = suma * 0.03;
        var total = suma + iva;
        document.write("el valor a pagar es: " + total);
        break;
    default: document.write("el numero no corresponde a ningun pago!")
    break;
}