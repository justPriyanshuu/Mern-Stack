const express = require("express");
const app = express();
const port = 3000;

app.use(express.json());

app.post('/hello', (req, res) => {
  const name = req.body.name;
  res.send(`Hello ${name}`);
});

app.get("/home", (req, res) => {
  res.send("You are on Homepage Page");
});
app.get("/contact", (req, res) => {
  res.send("You are on Contact Page");
});
app.get("/greet/:Name", (req, res) => {
  let { Name } = req.params;

  res.send(`Welcome ${Name}`);
});
app.get("/greet", (req, res) => {
  res.send(`Please provide your name in the URL`);
});

app.get("/sum", (req, res) => {
  let { a, b } = req.query;
  if (!a || !b) {
    return res.send("Please provide both 'a' and 'b' as query parameters.");
  }
  let A = Number(a);
  let B = Number(b);
  let sum = A + B;
  res.send(sum);
});

app.listen(port, () => {
  console.log("Listening");
});
