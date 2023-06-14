/*var num = parseInt(prompt("Dijite un numero"));
//pida al usuario un numero y determinar si es par o impar y si es negativo o positivo
// forma anidada
if (num > 0) {
    if(num % 2 == 0){
        document.write("El numero " + num + " es positivo y par");
    }else{
        document.write("El numero " + num + " es positivo y impar");
    }
}else if (num < 0) {
    if(num % 2 == 0){
        document.write("El numero " + num + " es negativo y par")
    }else{
        document.write("El numero " + num + " es negativo y impar")
    }
}else{
    alert("el numero es 0")
}*/

var num1 = parseInt(prompt("Dijite un numero"));
var num2 = parseInt(prompt("Dijite un numero"));

//pedirle al  usuario  dos numeros y preguntar cual es el numero menor y cual  es el mayor

if(num1 > num2){
    document.write("El numero  " + num1 + " es mayor que " + num2);
}else if(num1 < num2){
    document.write("El numero  " + num1 + " es menor que " + num2);
}else if(num2 > num1){
    document.write("El numero  " + num2 + " es mayor que " + num1);
}else if (num2 < num1){
    document.write("El numero  " + num2 + " es menor que " + num1);
}else {
    document.write("El numero  " + num1 + " es igual " + num2);
}


