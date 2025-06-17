let btn = document.querySelector("#generate");

btn.addEventListener("click", async () => {
  const url = `https://api.quotable.io/random`;

  try {
    let res = await axios.get(url);
    let content=res.data.content;
    let author=res.data.author;

    
  } catch (e) {
    console.log(e);
  }
});
