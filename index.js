const exrpess = require("express");
const fs = require("fs/promises");

const app = exrpess();

async function returnHtml(filename, res) {
  try {
    res.send(await fs.readFile(filename, "utf8"));
  } catch (e) {
    console.error(e);
  }
}

app.get("/", (req, res) => {
  returnHtml("./index.html", res);
});

app.get("/about", (req, res) => {
  returnHtml("./index.html", res);
});

app.get("/contact", (req, res) => {
  returnHtml("./index.html", res);
});

app.use((req, res) => {
  returnHtml("./404.html", res);
});

app.listen(3000, () => {
  console.log("go to port 3000");
});
