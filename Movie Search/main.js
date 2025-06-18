let btn = document.querySelector(".search");

btn.addEventListener("click", async () => {
  let movie = document.querySelector(".movieName").value.trim();
  let url = `https://www.omdbapi.com/?t=${movie}&apikey=662cfd31`;

  try {
    let result = await axios.get(url);
    let poster = result.data.Poster;
    let title = result.data.Title;
    let year = result.data.Year;
    let genre = result.data.Genre;
    let actors = result.data.Actors;
    let imdb = result.data.Ratings[0].Value;

    let card = document.querySelector(".result");
    card.innerHTML = "";

    let movieCard = document.createElement("div");
    movieCard.classList.add("movie-card");

    let cardImg = document.createElement("img");
    cardImg.src = poster;

    let movieDetails = document.createElement("div");
    movieDetails.classList.add("movie-details");

    let h3 = document.createElement("h3");
    h3.textContent = title;

    let pYear = document.createElement("p");
    pYear.textContent = "Year: " + year;

    let pGenre = document.createElement("p");
    pGenre.textContent = "Genre: " + genre;

    let pActors = document.createElement("p");
    pActors.textContent = "Actors: " + actors;

    let pImdb = document.createElement("p");
    pImdb.textContent = "Imdb Rating:" + imdb;

    movieDetails.appendChild(h3);
    movieDetails.appendChild(pYear);
    movieDetails.appendChild(pGenre);
    movieDetails.appendChild(pActors);
    movieDetails.appendChild(pImdb);

    movieCard.appendChild(cardImg);
    movieCard.appendChild(movieDetails);

    card.appendChild(movieCard);
  } catch (e) {
    console.log(e);
  }
});
