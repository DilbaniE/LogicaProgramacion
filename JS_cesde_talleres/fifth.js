var nota1 = parseInt(prompt("dijite la nota1"));
var nota2 = parseInt(prompt("dijite la nota2"));
var nota3 = parseInt(prompt("dijite la nota3"));

var suma = (nota1+nota2+nota3);
var promedio = ((suma / 3).toFixed(1)) ;

if (promedio == 5 && promedio >= 4.5){
    document.write("un buen estudiante " + promedio)
}else if (promedio <= 4.4 && promedio >= 4){
    document.write("un bueno  " + promedio)
}else if(promedio <= 3.9 && promedio >= 3){
    document.write("un regular " + promedio)
}else if(promedio == 2.9 ){
    document.write("debe recuperar materia  " + promedio)
}else{
    document.write("volver a ver la materia  " + promedio)
}