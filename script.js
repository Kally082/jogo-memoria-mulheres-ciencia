var CartasArray = [
    {nome: "Jaqueline", imagem: "carta_frente_0.png"},
    {nome: "Margaret", imagem: "carta_frente_1.png"},
    {nome: "Grace", imagem: "carta_frente_2.png"},
    {nome: "Marian", imagem: "carta_frente_3.png"},
    {nome: "Ada", imagem: "carta_frente_4.png"},
    {nome: "Gladys", imagem: "carta_frente_5.png"},
    {nome: "Nise", imagem: "carta_frente_6.png"},
    {nome: "Patricia", imagem: "carta_frente_7.png"},
];

var CartasArray_Duplicadas = [...CartasArray, ...CartasArray]; //os ... (spread operator) abrem o conteúdo do array dentro do novo array

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
var CartasEmbaralhadas = embaralhar(CartasArray_Duplicadas);

for (let i = 0; i < CartasEmbaralhadas.length; i++){
    let carta = document.createElement("div"); 
    carta.classList.add("carta");
    carta.setAttribute("data-valor", CartasEmbaralhadas[i].nome);
    carta.setAttribute("data-image", CartasEmbaralhadas[i].imagem);

    let frente = document.createElement("div");
    let verso = document.createElement("div");
    frente.classList.add("face", "frente");
    verso.classList.add("face", "verso");

    // Define a imagem de fundo da carta (frente), montando o caminho do arquivo e juntando a pasta "images/mulheres/" com o nome do arquivo daquela carta específica
    frente.style.backgroundImage = `url("images/mulheres/${CartasEmbaralhadas[i].imagem}")`;

    carta.appendChild(frente);
    carta.appendChild(verso);

    let container = document.getElementById("container");
    container.appendChild(carta);
}