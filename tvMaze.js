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
      data[161],
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
    div.style.width = "18rem"
    moviesCard.append(div);

    // create img in div 
    // cotinue here
  });
};
