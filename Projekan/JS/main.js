
// Secara Singkat yaitu FILE JS atau
// JavaScript Yang berisi Pembuatan 
// Upcoming anime , Top anime , Now anime dan Movie anime


// -------NOW ANIME-----------------------------------

seasonNow = document.querySelector(".now");

fetch("https://api.jikan.moe/v4/seasons/now")
  .then((response) => response.json())
  .then((x) => {
    let c = x.data;
    c.map((z) => {

      if(z.score != null ){

        let figure = document.createElement("figure");
  
        a = document.createElement('a');
        a.target = '_blank';
        a.href = z.url;
    
        let img = document.createElement("img");
        img.src = z.images.jpg.large_image_url;
  
        let score = document.createElement("span");
        score.textContent = "score :" + z.score;
  
        trailer = document.createElement('a');
        trailer.classList.add('linkTrailer');
        trailer.target = '_blank';
        trailer.href = z.trailer.url;
  
        trailers = document.createElement('span')
        trailers.innerText = 'Watch-Trailer';
  
        let figcaption = document.createElement("figcaption");
        figcaption.innerText = z.title;
  
        trailer.appendChild(trailers);
        a.appendChild(img);
        figure.appendChild(a);
        figure.appendChild(score);
        figure.appendChild(trailer);
        figure.appendChild(figcaption);
  
        seasonNow.appendChild(figure);
      }

      // }
    });
  });
let now = document.createElement("span");
now.innerText = "SEASON NOW";
let n1 = document.querySelector(".now1");
n1.appendChild(now);

let garis = document.createElement('hr');
main.appendChild(garis);
main.appendChild(n1);
main.appendChild(seasonNow);


//  -----------------------------------------------


// -------UPCOMING ANIME-----------------------------------

upComing = document.querySelector(".upcoming");
fetch("https://api.jikan.moe/v4/seasons/upcoming")
  .then((response) => response.json())
  .then((x) => {
    let c = x.data;
    c.map((z) => {

      let figure = document.createElement("figure");

      a = document.createElement('a');
      a.target = '_blank';
      a.href = z.url;
  
      let img = document.createElement("img");
      img.src = z.images.jpg.large_image_url;

      let status = document.createElement("span");
      status.textContent = "status : ready Upcoming";

      trailer = document.createElement('a');
      trailer.classList.add('linkTrailer');
      trailer.target = '_blank';
      trailer.href = z.trailer.url;

      trailers = document.createElement('span')
      trailers.innerText = 'Watch-Trailer';

      let figcaption = document.createElement("figcaption");
      figcaption.innerText = z.title;

      trailer.appendChild(trailers);
      a.appendChild(img);
      figure.appendChild(a);
      figure.appendChild(status);
      figure.appendChild(trailer);
      figure.appendChild(figcaption);

      upComing.appendChild(figure);

      // }
    });
  });
let up = document.createElement("span");
up.innerText = "UPCOMING";
let u1 = document.querySelector(".upcoming1");
u1.appendChild(up);

garis = document.createElement('hr');
main.appendChild(garis);
main.appendChild(u1);
main.appendChild(upComing);

// ----------------------------------------------------------------



// -------MOVIE ANIME-----------------------------------

random = document.querySelector(".random");

let i = 459;
jumlah = 0;

const intervalId = setInterval(async () => {
  const API = `https://api.jikan.moe/v4/anime/${i}/full`;

  i++;
  const response = await fetch(API);
  if (response.ok) {
    const x = await response.json();
    const z = x.data;

    let figure = document.createElement("figure");

    a = document.createElement('a');
    a.target = '_blank';
    a.href = z.url;

    tipe = document.createElement('span');
    tipe.innerText = 'Type : ' + z.type + ' ' ;

    trailer = document.createElement('a');
    trailer.classList.add('linkTrailer');
    trailer.target = '_blank';
    trailer.href = z.trailer.url;

    trailers = document.createElement('span')
    trailers.innerText = ' - (WatchTrailer)';


    genre = document.createElement('span');
    genre.innerText = `Genres : ${z.genres[0].name} , ${z.genres[1].name}`;

    let gambar = document.createElement("img");
    gambar.src = z.images.jpg.large_image_url;

    let kata = document.createElement("p");
    kata.textContent = "Title : " + z.title;

    let figcaption = document.createElement("figcaption");

    a.appendChild(gambar);
    trailer.appendChild(trailers);
    tipe.appendChild(trailer);
    figure.appendChild(a);
    figure.appendChild(genre);    
    figure.appendChild(tipe);
    figcaption.appendChild(kata);
    figure.appendChild(figcaption);

    random.appendChild(figure);

    jumlah++;
    if(i == 467){i = 2642;}
    if(i == 2679){i = 779;}

  }
  if (jumlah === 35) {
    clearInterval(intervalId);
  }
}, 400);
let acak = document.createElement("span");
acak.innerText = "MOVIE ANIME";
let r1 = document.querySelector(".random1");
r1.appendChild(acak);
garis = document.createElement('hr');
main.appendChild(garis);
main.appendChild(r1);
main.appendChild(random);

// --------------------------------------------------------------


// -------TOP ANIME-----------------------------------

topOp = document.querySelector(".top");

fetch("https://api.jikan.moe/v4/top/anime")
  .then((response) => response.json())
  .then((x) => {
    let c = x.data;
    c.map((z) => {

      let figure = document.createElement("figure");

      let a = document.createElement('a');
      a.target = '_blank';
      a.href = z.url;

      let img = document.createElement("img");
      img.src = z.images.jpg.large_image_url;

      let score = document.createElement("span");
      score.textContent = "score :" + z.score;

      trailer = document.createElement('a');
      trailer.classList.add('linkTrailer');
      trailer.target = '_blank';
      trailer.href = z.trailer.embed_url;

      trailers = document.createElement('span')
      trailers.innerText = 'Watch-Trailer';

      let figcaption = document.createElement("figcaption");
      figcaption.innerText = z.title;

      trailer.appendChild(trailers);
      a.appendChild(img);
      figure.appendChild(a);
      figure.appendChild(score);
      figure.appendChild(trailer);
      figure.appendChild(figcaption);

      topOp.appendChild(figure);

    });
  });

let topp = document.createElement("span");
topp.innerText = "TOP ANIME";
let t1 = document.querySelector(".top1");
t1.appendChild(topp);
main.appendChild(t1);
main.appendChild(topOp);

// -------------------------------------------------------

