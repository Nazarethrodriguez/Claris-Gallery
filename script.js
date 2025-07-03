const gallery = document.querySelector('.gallery');
let imageUrlInput = document.getElementById('imageUrl');
let imageDescriptionInput= document.getElementById('imageDescription');
let addImageButton= document.getElementById('addImage');
const errorMessage= document.getElementById('errorMessage');
const form = document.getElementById('myForm');
const clickSonido = document.getElementById('clickSonido');

let imagenes = [
    'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR6tCeItMwzihuFNRif09GWsbd-d4OPZ2w1wg&s',
    'https://images.justwatch.com/poster/306837101/s718/el-hada-de-las-pesas-kim-bok-joo.jpg',
    'https://www.usatipps.de/wp-content/uploads/2023/12/walt-disney-world-resort-orlando.jpg',
    'https://vitrinavenezuela.com/wp-content/uploads/2022/02/204-pastel-tres-leches.jpg',
    'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRGHaBRvhk8oP8nlTzKWHLl9nxxUxZ3UF43KA&s'
];

let descripcion = [
    'Playita',
    'kdrmalovers',
    'Disney',
    'Tres leche',
    'Dance'

];


function crearGallery(){
    for (let i = 0; i < imagenes.length; i++) {
        let elementogaleria = document.createElement("div")
        let fotogaleria = document.createElement("img")
        let descripcionGaleria = document.createElement("p")           
        fotogaleria.src = imagenes[i]
        descripcionGaleria.innerHTML = descripcion[i]

        elementogaleria.append(fotogaleria)
        elementogaleria.append(descripcionGaleria)
        gallery.append(elementogaleria)
    }
    imagenes = []
    descripcion = []
}

crearGallery()


function agregarElemento(){
    let inputDescription = document.getElementById("imageDescription");
    let inputUrl = document.getElementById("imageUrl");

    if (inputUrl.value.trim() === "" || inputDescription.value.trim() === ""){
        errorMessage.innerText= "Por favor,completa ambos";
        return;
    }else{
        errorMessage.innerText = "";
        imagenes.push(inputUrl.value="");
        descripcion.push(inputDescription.value="");
    }

    let existingImages = gallery.getElementsByTagName("img");
    let alreadyExists = false;

    for (let img of existingImages){
        if (img.src === inputUrl){
            alreadyExists = true;
            break;
        }

    }

    crearGallery()
}
