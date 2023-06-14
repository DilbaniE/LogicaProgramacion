var anho = parseInt(prompt("Dijite un año actual"));
var fecha = parseInt(prompt("Dijite un año de nacimiento"));
var mes = parseInt(prompt("Dijite un mes"));
var dia = parseInt(prompt("Dijite un dia"));

var fechaNacimiento = anho - fecha;
document.write("su edad es " + fechaNacimiento );
document.write(" su cumpleaños es " + dia + " /" + mes + " /" + anho )