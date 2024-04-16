const cards = document.querySelectorAll(".card");
const valueOfInput = document.querySelector(".searchBox");
const searchIcon = document.querySelector(".searchIcon");
const imgCArd = document.querySelectorAll(".img-cards");
const cardTitle = document.querySelectorAll(".card-title");
const genre = document.querySelectorAll(".genre");
const imdb = document.querySelectorAll(".imdb");

// -------------- basic card in the page ----------------
const getDataShows = async () => {
  const res = await fetch("https://api.tvmaze.com/shows");
  const data = await res.json();
  return data;
};

getDataShows()
  .then((res) => res)
  .then((data) => (showsData(data), showSession(data)))
  .catch((er) => console.log(er));

let counter = true;

const showsData = (data) => {
  if (counter) {
    for (let i = 0; i < 10; i++) {
      for (let j = 0; j < imgCArd.length; j++) {
        imgCArd[j].src = data[j].image.original;
        cardTitle[j].innerHTML = data[j].name;
        genre[j].innerHTML = data[j].genres.join().replaceAll(",", " | ");

        if (data[j].rating.average !== null) {
          imdb[j].innerHTML = data[j].rating.average;
        } else {
          imdb[j].innerHTML = "Movie information not found";
        }

        // cards[j].addEventListener("click", (e) => {
        //   // console.log(data[j].url);
        //   const url = data[j].url;
        //   window.open(url, "_blank");
        // });
      }
    }
  }
};

// -------------- with search card in the page ----------------
valueOfInput.addEventListener("keyup", (event) => {
  counter = false;
  event.preventDefault();
  const query = valueOfInput.value;

  if (!event.value) {
    searchIcon.style.visibility = "hidden";
  }

  const getDataQuery = async () => {
    const res = await fetch(`https://api.tvmaze.com/search/shows?q=${query}`);
    const data = await res.json();
    return data;
  };

  getDataQuery()
    .then((data) => infoOfQuery(data))
    .catch((er) => console.log(er));
});

const infoOfQuery = (data) => {
  for (let i = 0; i < data.length; i++) {
    for (let j = 0; j < imgCArd.length; j++) {
      // imgCArd[j] = ""
      const shows = data[j].show;
      if (data[j].show.image !== null) {
        imgCArd[j].removeAttribute("src");
        imgCArd[j].src = shows.image.medium;
        cardTitle[j].innerHTML = shows.name;
        genre[j].innerHTML = shows.genres.join().replaceAll(",", " | ");
      }

      if (shows.rating.average !== null) {
        imdb[j].innerHTML = shows.rating.average;
      } else {
        imdb[j].innerHTML = "Movie information not found";
      }

      if (valueOfInput) {
        cards[j].addEventListener("click", (e) => {
          const url = shows.url;
          window.open(url, "_blank");
        });
      }
    }
  }
};

// -------------- To display any movie session ----------------
// imgCArd.forEach(el => {
//   // console.dir(el);

// });

const getDatasession = async () => {
  const res = await fetch(`https://api.tvmaze.com/shows/${id}/episodes`);
};
function showSession(data) {
  // console.log(data);
}
