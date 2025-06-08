let display = document.querySelector(".display-value");
let btn = document.querySelectorAll("button");

btn.forEach((button) => {
  button.addEventListener("click", () => {
    let key = button.innerText;
    if (key === "Ac") {
      display.innerText = "";
    } else if (key === "Del") {
      display.innerText = display.innerText.slice(0, -1);
    } else if (key === "=") {
      try {
        display.innerText = eval(display.innerText).toString();
      } catch (error) {
        display.innerText = "Error";
        setInterval(() => {
          display.innerText = "";
        }, 2000);
      }
    } else {
      display.innerText += key;
    }
  });
});
