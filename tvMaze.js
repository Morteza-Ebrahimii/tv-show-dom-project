const valueOfInput = document.querySelector(".searchBox");
const searchIcon = document.querySelector(".searchIcon");

valueOfInput.addEventListener("keyup", (event) => {
  event.preventDefault();
  console.log(valueOfInput.value);
  const query = valueOfInput.value;

  if (!event.value) {
    searchIcon.style.visibility = "hidden";
  }

  const getData = async () => {
    const res = await fetch(`https://api.tvmaze.com/search/shows?q=${query}`);
    const data = await res.json();
    // return data;
  };

  getData()
    .then((res) => res)
    .then((data) => {
      data.forEach((el) => {
        console.log(el);
        // document.createElement("")
      });
    })
    .catch((er) => console.log(er));
});
