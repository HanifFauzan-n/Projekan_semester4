
//  JavaScript yang berisi API untuk Searching Manga 

let APIall = "https://api.jikan.moe/v4/top/manga";
let APIname = "https://api.jikan.moe/v4/manga?q=";


function panggilAPI(input) {
  localStorage.setItem("inp", input);
  let main = document.querySelector("main");
  main.innerHTML = "";

  let API;
  if (localStorage.getItem("inp") == "") {
    API = APIall;
  } else {
    API = APIname + input;
  }

  fetch(API)
    .then((response) => response.json())
    .then((x) => {
      tamp = x.data;
      tamp.map((dataApi) => {

        // Validasi biar yang keluar Tidak Aneh - Aneh
        if ( dataApi.genres[0].name == 'Adventure'|| dataApi.genres[0].name == 'Slice of Life' || dataApi.genres[0].name == 'Action' && dataApi.synopsis != null) {

            // Membuat data / content yang telah disediakan oleh API
          let div = document.createElement('div');
          div.classList.add('kotak1');

          let div2 = document.createElement('div');
          div2.classList.add('kotak2');

          let figure = document.createElement("figure");

          let img = document.createElement("img");
          img.src = dataApi.images.jpg.large_image_url;

          let sinopsis = document.createElement('p');
          sinopsis.innerText = `${dataApi.synopsis}`; 

          let title = document.createElement('h4');
          title.innerText = dataApi.title;

        //   Memasukan Data kedalam TAG Main
          div.appendChild(img);
          div2.appendChild(title);
          div2.appendChild(sinopsis);
          figure.appendChild(div);
          figure.appendChild(div2);

          main.appendChild(figure);
        }
      });
    })
    .catch((e) => {
      console.log(e);
      document.querySelector("input").value = "";
      panggilAPI("");
    });
}

//  Add Event pada tag form 
const form = document.getElementById("form");
form.addEventListener("submit", (e) => {
  e.preventDefault();
  panggilAPI(document.search.input.value);
});





