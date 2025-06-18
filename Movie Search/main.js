let btn = document.querySelector(".search");

btn.addEventListener("click", async () => {
  let movie = document.querySelector(".movieName").value.trim();
  let url = `https://www.omdbapi.com/?t=${movie}&apikey=662cfd31`;

  try {
    let result = await axios.get(url);
    let poster=result.data.Poster;
    let title=result.data.Title;
    let year=result.data.year;
    let genre=result.data.Genre;
    let actors=result.data.Actors;
    
  } catch (e) {
    console.log(e);
  }
});
