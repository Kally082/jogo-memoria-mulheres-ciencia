var CartasArray = [
    {par: "Jaqueline", tipo:"foto", imagem: "carta_frente_0.png"},
    {par: "Jaqueline", tipo:"conquista", imagem: "jaqueline_conquista.png"},
    {par: "Margaret", tipo:"foto", imagem: "carta_frente_1.png"},
    {par: "Margaret", tipo:"conquista", imagem: "margaret_conquista.png"},
    {par: "Grace", tipo:"foto",  imagem: "carta_frente_2.png"},
    {par: "Grace", tipo:"conquista",  imagem: "grace_conquista.png"},
    {par: "Marian", tipo: "foto", imagem: "carta_frente_3.png"},
    {par: "Marian", tipo: "conquista", imagem: "marian_conquista.png"},
    {par: "Ada", tipo:"foto", imagem: "carta_frente_4.png"},
    {par: "Ada", tipo:"conquista", imagem: "ada_conquista.png"},
    {par: "Gladys", tipo:"foto", imagem: "carta_frente_5.png"},
    {par: "Gladys", tipo:"conquista", imagem: "gladys_conquista.png"},
    {par: "Nise", tipo:"foto", imagem: "carta_frente_6.png"},
    {par: "Nise", tipo:"conquista", imagem: "nise_conquista.png"},
    {par: "Patricia", tipo:"foto", imagem: "carta_frente_7.png"},
    {par: "Patricia", tipo:"conquista", imagem: "patricia_conquista.png"},
];

function embaralhar(array){
    for( let i = array.length - 1; i > 0; i--){ 
        let j = Math.floor(Math.random() * (i + 1));

        let temp = array[i];
        array[i] = array[j];
        array[j] = temp;
    }
    return array
}


//loop para as 16 cartas
var CartasEmbaralhadas = embaralhar(CartasArray);

for (let i = 0; i < CartasEmbaralhadas.length; i++){
    let carta = document.createElement("div"); 
    carta.classList.add("carta");
    carta.setAttribute("data-nome", CartasEmbaralhadas[i].par);
    carta.setAttribute("data-tipo", CartasEmbaralhadas[i].tipo);
    carta.setAttribute("data-image", CartasEmbaralhadas[i].imagem);
    
    let cartaInterna = document.createElement("div");
    cartaInterna.classList.add("carta-interna");

    let frente = document.createElement("div");
    let verso = document.createElement("div");
    frente.classList.add("face", "frente");
    verso.classList.add("face", "verso");

    // Define a imagem de fundo da carta (frente), montando o caminho do arquivo e juntando a pasta "images/mulheres/" com o nome do arquivo daquela carta específica
    if(CartasEmbaralhadas[i].tipo == "foto"){
        frente.style.backgroundImage = `url("assets/images/mulheres/${CartasEmbaralhadas[i].imagem}")`;
    }
    else{
        frente.style.backgroundImage = `url("assets/images/conquistas/${CartasEmbaralhadas[i].imagem}")`;
    }

    carta.appendChild(cartaInterna);
    cartaInterna.appendChild(frente);
    cartaInterna.appendChild(verso);
    
    let container = document.getElementById("container");
    container.appendChild(carta);
}