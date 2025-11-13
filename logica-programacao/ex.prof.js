
const vitorias= Number(prompt("Quantos jogos o seu time venceu?"));
const empates =Number(prompt("Quantod jogos seu time empatou"));

const pontos= ( vitorias *3 + empates);

function mostrar( mensagem){
document.write(mensagem+pontos);

}
if(pontos>10){
    mostrar("seu time esta indo bem");

}
else if(pontos <5){
    mostrar("Seu time precisa melhorar");
}
else{
    mostrar("Fora da zona de rebaixamento");
}