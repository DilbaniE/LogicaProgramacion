
var pago= parseInt(prompt(" 1: si esta entre 0 y 10 años 2:si esta entre 11 y 17 años"+
" 3: si esta entre 18 y 49 años 4:si esta entre 50 o más"));

var costodia = 20000;
var costodia2 = 30000;
var costodia3 = 25000;
var costodia4 = 15000;


switch(pago){
    case 1:
        var diasHospi = parseInt(prompt("Dijite los dias de hospitalizacion"));
        if(diasHospi == 1 ){
            document.write("el valor a pagar es: " + costodia);  
        }else if (diasHospi >= 2 || diasHospi <= 4 ){ 
            var operacion = (diasHospi * costodia2 );
            document.write("el valor a pagar es: " + operacion);
        }else if (diasHospi >= 5 || diasHospi <= 7){
            var operacion = (diasHospi * costodia3 ); 
            var cargo = operacion * 0.05;
            var total = cargo + operacion;
            document.write("el valor a pagar es: " + operacion);
        } else{
            var operacion = (diasHospi * costodia4 ); 
            var cargo = operacion * 0.10;
            var total = cargo + operacion;
            document.write("el valor a pagar es: " + operacion);
        }   
        break;
    case 2:
        var diasHospi = parseInt(prompt("Dijite los dias de hospitalizacion"));
        if(diasHospi == 1 ){
            document.write("el valor a pagar es: " + costodia);  
        }else if (diasHospi >= 2 || diasHospi <= 4 ){ 
            var operacion = (diasHospi * costodia2 );
            document.write("el valor a pagar es: " + operacion);
        }else if (diasHospi >= 5 || diasHospi <= 7){
            var operacion = (diasHospi * costodia3 ); 
            document.write("el valor a pagar es: " + operacion);
        } else{
            var operacion = (diasHospi * costodia4 ); 
            var cargo = operacion * 0.10;
            var total = cargo + operacion;
            document.write("el valor a pagar es: " + operacion);
        }   
        break;
    case 3: 
    var diasHospi = parseInt(prompt("Dijite los dias de hospitalizacion"));
    if(diasHospi == 1 ){
        document.write("el valor a pagar es: " + costodia);  
    }else if (diasHospi >= 2 || diasHospi <= 4 ){ 
        var operacion = (diasHospi * costodia2 );
        document.write("el valor a pagar es: " + operacion);
    }else if (diasHospi >= 5 || diasHospi <= 7){
        var operacion = (diasHospi * costodia3 ); 
        document.write("el valor a pagar es: " + operacion);
    } else{
        var operacion = (diasHospi * costodia4 ); 
        var cargo = operacion * 0.15;
        var total = cargo + operacion;
        document.write("el valor a pagar es: " + operacion);
    }   
        break;
    case 4:
        var diasHospi = parseInt(prompt("Dijite los dias de hospitalizacion"));
        if(diasHospi == 1 ){
            document.write("el valor a pagar es: " + costodia);  
        }else if (diasHospi >= 2 || diasHospi <= 4 ){ 
            var operacion = (diasHospi * costodia2 );
            document.write("el valor a pagar es: " + operacion);
        }else if (diasHospi >= 5 || diasHospi <= 7){
            var operacion = (diasHospi * costodia3 ); 
            var cargo = operacion * 0.15;
            var total = cargo + operacion;
            document.write("el valor a pagar es: " + operacion);
        } else{
            var operacion = (diasHospi * costodia4 ); 
            var cargo = operacion * 0.20;
            var total = cargo + operacion;
            document.write("el valor a pagar es: " + operacion);
        }       
    default: document.write("el numero no corresponde a ningun pago!")
    break;
}