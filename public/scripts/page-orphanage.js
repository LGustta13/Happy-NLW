// Tipos de dados
// String, Number, object, boolean, array

const options = {
    dragging: false,
    touchZoom: false,
    doubleClickZoom: false,
    scrollWheelZoom: false,
    zoomControl: false

}

// get values from html
const lat = document.querySelector('span[data-lat]').dataset.lat
const lng = document.querySelector('span[data-lng]').dataset.lng

// Criação do mapa
var map = L.map('mapid', options).setView([lat,lng], 16);

// tilelayer é a camada que recebe nosso mapa
// create and add tile layer
L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png').addTo(map)

// create icon
const icon = L.icon({
    iconUrl: "/images/map-marker.svg",
    iconSize: [58,68],
    iconAnchor: [29,68],
    popupAnchor: [170, 2]
})

// create and add marker
L.marker([lat,lng], {icon})
.addTo(map)

/*image gallery*/
function selectImage(event) {
    const button = event.currentTarget
    console.log(button.children)

    // remover todas as classes .active
    const buttons = document.querySelectorAll(".images button")
    buttons.forEach((button) => {
        button.classList.remove("active")
    });
    
    // selecionar a imagem clicada
    const image = button.children[0]
    const imageContainer = document.querySelector(".orphanage-details > img")

    // atualizar o container de imagem
    imageContainer.src=image.src

    // adicionar a classe .active
    button.classList.add('active')
}