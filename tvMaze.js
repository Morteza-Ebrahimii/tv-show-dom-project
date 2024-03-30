const valueOfInput = document.querySelector(".searchBox");
const searchIcon = document.querySelector(".searchIcon");
const imgCArd = document.querySelectorAll(".img-cards");
const cardTitle = document.querySelectorAll(".card-title");
const genre = document.querySelectorAll(".genre");
const imdb = document.querySelectorAll(".imdb");

const getDataShows = async () => {
  const res = await fetch("https://api.tvmaze.com/shows");
  const data = await res.json();
  return data;
};

const getRandom = (min, max) =>
  Math.floor(Math.random() * (max - min + 1) + min);
Array.from({ length: 10 }, () => console.log(getRandom(0, 240)));

getDataShows()
  .then((res) => res)
  .then((data) => console.log(data))
  .catch((er) => console.log(er));

valueOfInput.addEventListener("keyup", (event) => {
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
      const shows = data[j].show;
      if (data[j].show.image !== null) {
        imgCArd[j].removeAttribute("src");
        imgCArd[j].src = shows.image.medium;
        cardTitle[j].innerHTML = shows.name;
        genre[j].innerHTML = shows.genres.join().replaceAll(",", " | ");
        console.log(data[j]);
      }

      if (shows.rating.average !== null) {
        imdb[j].innerHTML = shows.rating.average;
      } else {
        imdb[j].innerHTML = "Movie information not found";
      }
    }
  }
};
