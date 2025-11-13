/*
  Vamos criar um programa, de pontos ganhos do seu time em jogos de futebol
*/

/*
Pesando no programa:
1- Criar uma variavel vitorias, perguntando para o usuario, quantos jogos se time venceu
2- Criar outra variavel empates, perguntando quanto jogos o time empatou
3 - Criar uma variavel de pontos (multiplicar a variavel vitorias * 3) e somar com a variavel empates;
4 - Mostrar na tela esse resultado
*/

/*
Implementar condições,

Se os pontos for maior que 10:
Mostrar a mensagem, "Seu time está indo bem"

Se os pontos for menor que 5:
Mostrar a mensagem, "Seu time precisa melhorar"

*/


let vitorias = Number(prompt("Quantos jogos o time teve vitória"));
let empates = Number(prompt("Quantos Jogos o time empatou"));
let pontos

document.write(vitorias *3 + empates);



if(pontos  >10){
    alert("seu time precisa melhorar")
}
else{(pontos <5)
    alert("seu time esta indo bem")

}



