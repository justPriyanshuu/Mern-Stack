let btn = document.querySelector("#generate");

btn.addEventListener("click", async () => {
  const url = `https://api.quotable.io/random`;

  try {
    let res = await axios.get(url);
    let content = res.data.content;
    let author = res.data.author;

    let div = document.querySelector(".result");
    div.innerHTML = "";

    let p = document.createElement("p");
    p.innerHTML = `${content} <br>--<b>${author}</b>`;

    div.appendChild(p);
  } catch (e) {
    console.log(e);
  }
});
