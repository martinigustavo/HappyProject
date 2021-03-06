// create map
const map = L.map("mapid").setView([-29.4640448, -51.9668363], 16);

// create and add tileLayer
L.tileLayer("https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png").addTo(map);

// create icon
const icon = L.icon({
  iconUrl: "/images/map-marker.svg",
  iconSize: [58, 68],
  iconAnchor: [29, 68],
});

let marker;

// create and add marker
map.on("click", (event) => {
  const lat = event.latlng.lat;
  const lng = event.latlng.lng;

  document.querySelector("[name=lat]").value = lat;
  document.querySelector("[name=lng]").value = lng;

  // remove icon
  marker && map.removeLayer(marker);

  // add icon layer
  marker = L.marker([lat, lng], { icon }).addTo(map);
});

// add photo field button
function addPhotoField() {
  // pegar container de fotos #images
  const container = document.querySelector("#images");

  // pegar o container para duplicar .new-image
  const fieldsContainer = document.querySelectorAll(".new-upload");

  // realizar o clone da última imagem adicionada
  const newFieldContainer = fieldsContainer[
    fieldsContainer.length - 1
  ].cloneNode(true);

  // verificar se o campo está vazio, se sim, não adicionar ao container de imagens
  const input = newFieldContainer.children[0];

  if (input.value == "") {
    return;
  }

  // limpar o campo antes de add ao container de imagens
  input.value = "";

  // adicionar o clone ao container de #images
  container.appendChild(newFieldContainer);
}

function deleteField(event) {
  const span = event.currentTarget;

  const fieldsContainer = document.querySelectorAll(".new-upload");

  if (fieldsContainer.length < 2) {
    span.parentNode.children[0].value = "";
    return;
  }

  // deltar o campo
  span.parentNode.remove();
}

// select yes or no buttons
function toggleSelect(event) {
  // pegar botão clicado
  document
    .querySelectorAll(".button-select button")
    .forEach((button) => button.classList.remove("active"));

  // colocar a class .active no botao clicado
  const button = event.currentTarget;
  button.classList.add("active");

  // atualizar o input hidden com o valor selecionado
  const input = document.querySelector('[name="open-on-weekends"]');

  // verificar se sim ou nao
  input.value = button.dataset.value;
}

function validate(event) {
  // validar se lat e lng estao preenchidos
  const lat = document.querySelector("[name=lat]").value;
  const lng = document.querySelector("[name=lng]").value;

  if (lat == "" || lng == "") {
    event.preventDefault();
    alert(
      "Escolha o local da instituição clicando no mapa antes de confirmar!"
    );
  }
}
