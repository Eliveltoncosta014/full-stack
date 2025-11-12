/* Enunciado:
Crie um programa que peça um número e mostra uma mensagem dizendo se ele 
é positivo, negativo ou igual a zero.*/

let numero = Number(prompt("digite um numero"));

if(numero > 0){
    alert("Esse numero é positivo");

}
else if (numero<0){
    alert("O numero é negativo");
}
else {
    alert("O numero é igual a zero");
}