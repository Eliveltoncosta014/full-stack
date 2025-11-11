/* Vamos criar um programa que o usuario executa uma função e
dentro dessa função existe uma frase.
Pode pular linhas.
*/

function resultCarros(){
   document.write("Carros");
}

function marcasCarros(marcasCarros){
    document.write(marcasCarros);

}    
function pularLinha() {
    document.write("<br>")

}
//Para executar a função 
resultCarros("Meus carros de passeio");
marcasCarros("Bugatti");
pularLinha(); 
pularLinha(); 
marcasCarros("Rolls-Royce");
pularLinha();
pularLinha(); 
marcasCarros("Maserati");
pularLinha();

