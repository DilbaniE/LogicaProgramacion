var edad = parseInt(prompt("Dijite su edad"));

if(edad < 18){
    document.write("es menor de edad")
}else if (edad >= 18 && edad <= 28){
    document.write("es adulto adolecente")
}else if (edad >= 29 && edad <= 49){
    document.write("es adulto")
}else{
    document.write("es adulto mayor")
}