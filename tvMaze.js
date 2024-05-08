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
  .then((data) => getData(data))
  .catch((er) => console.log(er));

const getData = (data) => {
  data.forEach((el) => {
    console.log(el);
  });
};
