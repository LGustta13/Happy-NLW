// Tipos de dados
// String, Number, object, boolean, array

// Criação do mapa
var map = L.map('mapid').setView([-21.3694997,-45.5149058], 16);

// tilelayer é a camada que recebe nosso mapa
// create and add tile layer
L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png').addTo(map)

// create icon
const icon = L.icon({
    iconUrl: "/images/map-marker.svg",
    iconSize: [58,68],
    iconAnchor: [29,68],
})

// possibilita alterar o valor da variavel sempre que quiser na aplcação
let marker;

// Create and add markers
// Sempre que houver um click, executar uma função
map.on('click', (event) => {
    const lat = event.latlng.lat;
    const lng = event.latlng.lng;

    document.querySelector('[name=lat]').value = lat;
    document.querySelector('[name=lng]').value = lng;


    // remove icon layer
    // Se existe o marker, &&-então remova-o
    marker && map.removeLayer(marker)

    // add icon layer
    marker = L.marker([lat,lng],{icon})
    .addTo(map)
})

// Add photo field

function addPhotoField() {
    // Pegar o container de fotos #images
    const container = document.querySelector('#images')

    // Pegar o container para duplicar .new-image
    const fieldsContainer = document.querySelectorAll('.new-upload')

    // Realizar o clone da última imagem adicionada para
    const clonedContainer = fieldsContainer[fieldsContainer.length - 1].cloneNode(true)

    // Remover algum clone
    const input = clonedContainer.children[0]
    if(input.value == ""){
        return
    }
    input.value = ""

    // Adicionar o clone ao container de #imagens
    container.appendChild(clonedContainer)
}

function deleteField(event) {
    const span = event.currentTarget
    const fieldsContainer = document.querySelectorAll('.new-upload')

    if(fieldsContainer.length<2){
        // limpar o valor do campo input
        span.parentNode.children[0].value = ""
        return
    }

    //deletar o campo
    span.parentNode.remove();
}

// Select yes or nosso
function toggleSelect(event) {
    // retirar a classe .active (dos botões)
    document.querySelectorAll('.button-select button')
    .forEach((button) => {
        button.classList.remove('active')
    })

    // colocar a classe .active nesse botão clicado
    const button = event.currentTarget
    button.classList.add('active')

    // atualizar o meu input hidden com o valor selecionados
    const input = document.querySelector('[name="open_on_weekends"]')
    
    // verificar se sim ou não 
    input.value = button.dataset.value
}


// DESAFIO !!!!!!
function validate(event) {

    // validar se lat e lng estão preenchidos
    // Quando a pessoa selecionar um ponto no mapa, a const recebe false
    const needsLatAndLng = false;
    if(needsLatAndLng) {
        event.preventDefault()  // Irá bloquear o envio do formulário
        alert('Selecione um ponto no mapa')
    }
}