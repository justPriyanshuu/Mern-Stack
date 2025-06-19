let btn = document.querySelector(".search");

btn.addEventListener("click", async () => {
  let username = document.querySelector(".username").value.trim();
  let url = `https://api.github.com/users/${username}`;

  try {
    let result = await axios.get(url);

    document.querySelector(".card").classList.remove("hidden");
    document.querySelector(".error").classList.add("hidden");

    document.querySelector(".avatar").src = result.data.avatar_url;
    document.querySelector(".name").textContent = result.data.name;
    document.querySelector(".bio").textContent = result.data.bio;
    document.querySelector(".repos").textContent = result.data.public_repos;
    document.querySelector(".followers").textContent = result.data.followers;

    let link = result.data.html_url;
    document.querySelector(".card").addEventListener("click", () => {
      window.location.href = link;
    });
  } catch (e) {
    document.querySelector(".card").classList.add("hidden");
    document.querySelector(".error").classList.remove("hidden");
  }
});
