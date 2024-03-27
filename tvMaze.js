const valueOfInput = document.querySelector(".searchBox");
const searchIcon = document.querySelector(".searchIcon");
const imgCArd = document.querySelectorAll(".img-cards");
const cardTitle = document.querySelectorAll(".card-title");
const genre = document.querySelectorAll(".genre");
const imdb = document.querySelectorAll(".imdb");

valueOfInput.addEventListener("keyup", (event) => {
  event.preventDefault();
  const query = valueOfInput.value;

  if (!event.value) {
    searchIcon.style.visibility = "hidden";
  }

  const getData = async () => {
    const res = await fetch(`https://api.tvmaze.com/search/shows?q=${query}`);
    const data = await res.json();
    return data;
  };

  getData()
    .then((data) => info(data))
    .catch((er) => console.log(er));
});

const info = (data) => {
  for (let i = 0; i < data.length; i++) {
    for (let j = 0; j < imgCArd.length; j++) {

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

    }
  }
};
