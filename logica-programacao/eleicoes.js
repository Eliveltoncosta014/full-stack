/*Algoritmo: Anos de Eleições

Início
    Declare anoInicio, anoAtual como números
    anoAtual ← 2025

    Escreva("Digite o ano da primeira eleição que você acompanhou:")
    Leia anoInicio

    Enquanto anoInicio ≤ anoAtual faça
        Escreva("Ano de eleição: ", anoInicio)
        anoInicio ← anoInicio + 2
    FimEnquanto
Fim
*/
let anoInicio = Number(prompt("Digite o ano da primeira eleição que você acompanhou:"));
let anoAtual = new Date().getFullYear();
    console.log(anoAtual)
    let tipoAno = (anoInicio % 2 === 0)? "ano par": "ano impar";
    while(anoInicio <= anoAtual){
        document.write("Ano de eleição:" + anoInicio + "<br>");
        anoInicio = anoInicio + 2;
    }