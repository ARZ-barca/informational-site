const http = require("http");
const fs = require("fs/promises");

http
  .createServer((req, res) => {
    const url = new URL(req.url, "http://localhost:3000");
    const section = url.pathname;
    async function returnHtml(filename) {
      try {
        const data = await fs.readFile(filename);
        res.writeHead(200, { "Content-Type": "text/html" });
        res.write(data);
        res.end();
      } catch (e) {
        console.error(e);
      }
    }
    if (section === "/") {
      returnHtml("./index.html");
    } else if (section === "/about") {
      returnHtml("about.html");
    } else if (section === "/contact") {
      returnHtml("contact-me.html");
    } else {
      returnHtml("404.html");
    }
  })
  .listen(3000);
