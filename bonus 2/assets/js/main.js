
// Consegna:    DONE

// Dato un array di oggetti letterali con:
// url dell’immagine
// titolo
// descrizione Creare un carosello come nella foto allegata.

// Milestone 0:  DONE

// Come nel primo carosello realizzato, focalizziamoci prima sulla creazione del markup statico: 
// costruiamo il container e inseriamo l'immagine grande in modo da poter stilare lo slider.

const slides = [
    {
        image: './assets/img/01.webp',
        title: 'Marvel\'s Spiderman Miles Morale',
        text: 'Experience the rise of Miles Morales as the new hero masters incredible, explosive new powers to become his own Spider-Man.',
    },
    {
        image: './assets/img/02.webp',
        title: 'Ratchet & Clank: Rift Apart',
        text: 'Go dimension-hopping with Ratchet and Clank as they take on an evil emperor from another reality.',
    },
    {
        image: './assets/img/03.webp',
        title: 'Fortnite',
        text: "Grab all of your friends and drop into Epic Games Fortnite, a massive 100 - player face - off that combines looting, crafting, shootouts and chaos.",
    },
    {
        image: './assets/img/04.webp',
        title: 'Stray',
        text: 'Lost, injured and alone, a stray cat must untangle an ancient mystery to escape a long-forgotten city',
    },
    {
        image: './assets/img/05.webp',
        title: "Marvel's Avengers",
        text: 'Marvel\'s Avengers is an epic, third-person, action-adventure game that combines an original, cinematic story with single-player and co-operative gameplay.',
    }
];




// Milestone 1: DONE
// Ora rimuoviamo i contenuti statici e usiamo l’array di oggetti letterali per popolare dinamicamente il carosello.
// Al click dell'utente sulle frecce verso sinistra o destra, l'immagine attiva diventerà visibile e dovremo aggiungervi titolo e testo.


const slidesEl = document.querySelector('.slides');

let imageActive = 0;

for (let i = 0; i < slides.length; i++) {
    const elementSl = slides[i];
    const markUp = `<img class="${i === imageActive ? 'active' : ''}" src="${elementSl.image}" alt="">`;
    slidesEl.insertAdjacentHTML('beforeend', markUp)
    title(i, elementSl);
    text(i, elementSl);
    thumbnail(i, elementSl);
}


// funzione per generare titolo immagine attiva
function title(i, element) {
    const titleEl = document.querySelector('.title');
    const titleMarkup = `<h2 class="${i === imageActive ? 'active' : ''}">${element.title}</h2>`;
    titleEl.insertAdjacentHTML('beforeend', titleMarkup);
}

// funzione per generare testo immagine attiva
function text(i, element) {
    const textEl = document.querySelector('.text');
    const textMarkup = `<h5 class="${i === imageActive ? 'active' : ''}">${element.text}</h5>`;
    textEl.insertAdjacentHTML('beforeend', textMarkup);
}

// BONUS 1 (opzionale):
// Aggiungere le thumbnails (sottoforma di miniatura) ed al click attivare l’immagine corrispondente.

function thumbnail(i, element) {
    const thumbEl = document.querySelector('.thumbnails');
    const thumbMarkup = `<img class="${i === imageActive ? 'active-thumb' : ''}" src="${element.image}"></img>`;
    thumbEl.insertAdjacentHTML('beforeend', thumbMarkup);
}

// Milestone 2: DONE
// Aggiungere il ciclo infinito del carosello. Ovvero se la miniatura attiva è la prima e l'utente clicca 
// la freccia verso destra, la miniatura che deve attivarsi sarà l'ultima 
// e viceversa per l'ultima miniatura se l'utente clicca la freccia verso sinistra.

const nextBtn = document.querySelector('.next');
const prevBtn = document.querySelector('.prev');


// funzione per scorrere le slide dal bottone 'next'
function next() {

    const image = document.querySelectorAll('.slides img');
    // console.log(image)
    const currentImage = image[imageActive];
    // console.log(currentImage)
    const title = document.querySelectorAll('h2');
    const curretTitle = title[imageActive];
    const text = document.querySelectorAll('h5');
    const currentText = text[imageActive];
    const thumb = document.querySelectorAll('.thumbnails img')
    const currentThumb = thumb[imageActive];

    removeClass(currentImage, curretTitle, currentText, currentThumb);

    imageActive++;

    if (imageActive=== 5) {
        imageActive = 0;
    }

    addClass(image, title, text, thumb);

}

// funzione per scorrere le slide dal bottone 'prev'
function prev() {

    const image = document.querySelectorAll('.slides img');
    const currentImage = image[imageActive];
    const title = document.querySelectorAll('h2');
    const currentTitle = title[imageActive];
    const text = document.querySelectorAll('h5');
    const currentText = text[imageActive];
    const thumb = document.querySelectorAll('.slides img');
    const currentThumb = thumb[imageActive];

    removeClass(currentImage, currentTitle, currentText, currentThumb);
    imageActive--;

    if (imageActive === -1) {
        imageActive = 4;
    }

    addClass(image, title, text, thumb);
}

// funzione per aggiungere la classe ai 3 elementi  
//                                                        (UTILIZZABILE BONUS MINIATURE?)


function addClass(img, title, text, thumb) {

    const nextImg = img[imageActive];
    const nextTitle = title[imageActive];
    const nextText = text[imageActive];
    const nextthumb = thumb[imageActive];

    nextImg.classList.add('active');
    nextTitle.classList.add('active');
    nextText.classList.add('active');
    nextthumb.classList.add('active-thumb');
}

// copio la funzione e la traformo in 'remove'

function removeClass(img, title, text, thumb) {

    img.classList.remove('active');
    title.classList.remove('active');
    text.classList.remove('active');
    thumb.classList.remove('active-thumb');
}




// BONUS 2  (opzionale):
// Aggiungere funzionalità di autoplay: dopo un certo periodo di tempo (3 secondi) l’immagine attiva dovrà cambiare alla successiva.
// BONUS 3  (opzionale):
// Aggiungere bottoni di start/stop e di inversione del meccanismo di autoplay.



