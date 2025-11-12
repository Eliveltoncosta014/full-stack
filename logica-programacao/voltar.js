/* 
Crie um programa que peça a idade de uma pessoa e mostre uma mensagem dizendo se ela pode votar ou ainda não pode votar.

*/
let idade = 16;
let idade2 = 17;
let numero1 = Number(prompt("digite sua idade "));

/*

Enunciado:
Crie um programa que peça a idade de uma pessoa e mostre uma mensagem dizendo se ela pode votar ou ainda não pode votar.

✅ Desafio extra:

Adicione mais uma condição:

Se a idade for menor que 16, mostre "Não pode votar".

Se for entre 16 e 17, mostre "Voto opcional".

Se for 18 ou mais, mostre "Voto obrigatório".

*/

if (idade <16) {
     alert("Não pode votar.");
}
else if(idade > =16 && idade <18) {
    alert("Voto obrigatorio.");
}

else{
    alert("Voto opcional");

} 