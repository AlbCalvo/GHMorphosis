let numero;
let impar;

numero = prompt(" Introduce el número para saber si es par.");
//console.log(" Primer nombre > ", nombre);
document.write("Número, " + numero);
impar = numero % 2;
if (impar == 0) {
    document.write(" El valor es Par. ");
}
else {
    document.write(" El valor es Impar. ");
}



