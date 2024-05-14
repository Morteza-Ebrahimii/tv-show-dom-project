const valueOfInput = document.querySelector(".searchBox");
const searchIcon = document.querySelector(".searchIcon");
const moviesCard = document.querySelector(".moviesCard");

// -------------- basic card in the page ----------------
const getDataShows = async () => {
  const res = await fetch("https://api.tvmaze.com/shows");
  const data = await res.json();
  return data;
};

getDataShows()
  .then((res) => res)
  .then((data) =>
    getData([
      data[3],
      data[5],
      data[9],
      data[27],
      data[169],
      data[60],
      data[59],
      data[70],
      data[79],
      data[161],
    ])
  )
  .catch((er) => console.log(er));

const getData = (data) => {
  data.forEach((el) => {
    // console.log(el);

    // create div in section of movie
    const div = document.createElement("div");
    div.setAttribute(
      "class",
      "card position-reletive d-flex justify-content-end"
    );
    div.style.width = "18rem";
    moviesCard.append(div);

    // create img in div
    const img = document.createElement("img");
    img.setAttribute("class", "img-cards");
    img.setAttribute("src", el.image.original);

    //create div for infomation in image cards
    const divInfo = document.createElement("div");
    divInfo.setAttribute("class", "card-body position-absolute mb-4");

    const title = document.createElement("h3");
    title.setAttribute("class", "card-title");
    title.textContent = el.name;

    const genre = document.createElement("h5");
    genre.setAttribute("class", "genre fs-5");
    genre.textContent = el.genres.join().replaceAll(",", " | ");

    const imdb = document.createElement("h5");
    imdb.setAttribute("class", "imdb");
    imdb.textContent = el.rating.average;

    div.append(img, divInfo);
    divInfo.append(title, genre, imdb);

    const findDataSearch = () => {
      // is for search movies in the page
      valueOfInput.addEventListener("keyup", (event) => {
        event.preventDefault();

        // console.log(el);
        if (!el.name.toLowerCase().includes(valueOfInput.value.toLowerCase())) {
          // console.log(div);
          div.setAttribute(
            "class",
            "card position-reletive justify-content-end"
          );
          div.style.display = "none";
        } else {
          // console.log(div);
          div.style.display = "flex";
        }

        if (!event.value) {
          searchIcon.style.visibility = "hidden";
        }
      });
    };
    findDataSearch();

    
  });
};
