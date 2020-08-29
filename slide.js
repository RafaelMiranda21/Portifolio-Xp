let indice_slide = 0; //essa letiável será usada em todas as nossas funções e será responsável por dizer qual o slide atual
mostrar_slides(indice_slide); //aqui já estamos chamando a função para que o slide já comece mostrando o primeiro slide
// Função principal que mostra os slides


function mostrar_slides(n) {
let i; 
let slides = document.getElementsByClassName("Atuacao-slides"); 
let ponto_indicador = document.getElementsByClassName("ponto-indicador-slide");


if(indice_slide > 5){
    indice_slide = 0;
     mostrar_slides(indice_slide);
}
 if(indice_slide < 0){
     indice_slide=5;
     mostrar_slides(indice_slide);
 }

 for (i = 0; i < 6; i++) { //inicia um loop entre os pontos indicadores
    ponto_indicador[i].className = ponto_indicador[i].className.replace(" ativo", ""); // remove a classe "ativo" do indicador
    } 
   
    ponto_indicador[indice_slide].className = ponto_indicador[indice_slide].className + " ativo"; //adiciona a classe "ativo" para o indicador do slide atual
    
for(i=0;i<3;i++){
 slides[i].style ="margin-left:-"+n+"00vw"; 
}




} 

function controlador_slides(n) {
    mostrar_slides(indice_slide = indice_slide + n);
    }

    function slide_atual(n) {
        mostrar_slides(indice_slide = n);

}

setTimeout(mostrar_slides, 2000);