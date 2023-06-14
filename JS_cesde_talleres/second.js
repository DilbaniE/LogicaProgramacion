var dia = parseInt(prompt("dijite un numero del 1 al 7"));
switch(dia){
    case 1: document.write("lunes");
    break;
    case 2: document.write("martes");
    break;
    case 3: document.write("miercoles");
    break;
    case 4: document.write("jueves");
    break;
    case 5: document.write("viernes");
    break;
    case 6: document.write("sabado");
    break;
    case 7: document.write("domingo");
    break;
    default: document.write("el numero no corresponde a ningun dia de la semana!")
    break;
}