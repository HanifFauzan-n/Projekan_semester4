
// JavaScript yang berisi pembuatan Header


let bar = document.createElement("img");
bar.src = "../image/Bar page.png";

document.querySelector(".chek").appendChild(bar);

let koala = document.createElement("img");
koala.src = "../image/koala_logo.png";

document.querySelector(".coala").appendChild(koala);

let index = document.createElement('a');
index.href = 'index.html'

let judul = document.createElement("p");
judul.textContent = "anime";
span = document.createElement('span');
span.textContent = 'H'


// MENAMBAHKAN TULISAN HANIME KE DALAM TAG NAV
let hanime = document.querySelector(".hanime");
let nav = document.querySelector("nav");

index.appendChild(span);
index.appendChild(judul);

hanime.appendChild(index);

nav.appendChild(hanime);

let homepage = document.createElement("a");
homepage.href = 'index.html'
homepage.textContent = "Homepage";

let cari = document.createElement("a");
cari.href = 'search.html'
cari.textContent = "Search";

let manga = document.createElement("a");
manga.href ='manga.html'
manga.textContent = "Manga";

let kontak = document.createElement("a");
kontak.target = '_blank'
kontak.href = 'https://www.facebook.com/lorr.kazuma.10'
kontak.textContent = "Creater";

// MEMASUKAN TULISAN HOMEPAGE , SEARCH , MANGA , Creater KEDALAM UL

let ul = document.querySelector("ul");
document.querySelector(".li1").appendChild(homepage);
document.querySelector(".li2").appendChild(cari);
document.querySelector(".li3").appendChild(manga);
document.querySelector(".li4").appendChild(kontak);

main = document.querySelector("main");
