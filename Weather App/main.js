let frm = document.querySelector("#weatherForm");

frm.addEventListener("submit", async (e) => {
  e.preventDefault();

  let cityName = document.querySelector("#cityInput").value;

  let url = `https://api.openweathermap.org/data/2.5/weather?q=${cityName}&appid=02db7f7c2643f26e3d3df6523c51a4b6&units=metric`;

  try {
    const res = await axios.get(url);
    let description = res.data.weather[0].description;
    let temprature = res.data.main.temp;

    let result = document.querySelector("#result");
    result.innerHTML = "";

    let p = document.createElement("p");
    p.textContent = `Weather: ${description}\n
                  Temprature: ${temprature}°C`;

    result.appendChild(p);
  } catch (e) {
    console.log(e);
  }
});
