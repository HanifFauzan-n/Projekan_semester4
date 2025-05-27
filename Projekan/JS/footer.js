
// JavaScript yang berisi pembuatan Footer

h3 = document.createElement('h3');
h3.textContent = 'Deskripsi Website';
document.querySelector('.deskrip').appendChild(h3);

garis = document.createElement('hr');
garis.classList.add('fot');
document.querySelector('.deskrip').appendChild(garis);

p = document.createElement('p');
p.textContent = 'Website Hanime - Website Histori Anime yang berisi detail tentang anime yang terbaru , teratas , dan anime lainnya';
document.querySelector('.deskrip').appendChild(p);


h3 = document.createElement('h3');
h3.textContent = 'Info';
document.querySelector('.info').appendChild(h3);

garis = document.createElement('hr');
garis.classList.add('fot');
document.querySelector('.info').appendChild(garis);

p = document.createElement('p');
p.textContent = 'Untuk Kenyamanan silahkan buka pada kecerahan yang baik untuk mata ';
document.querySelector('.info').appendChild(p);

h3 = document.createElement('h3');
h3.textContent = 'All rights reserved © Copyright 2023, Hanime. Created By Hanif FN';
document.querySelector('.copy').appendChild(h3);

