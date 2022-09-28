const http = require("http");

const server = http.createServer((req, res) => {
  if (req.url === "/") {
    res.end("Welcome to our homepage");
  }
  if (req.url === "/about") {
    res.end("Here is our about page");
  }

  res.end(`<h1>OOps page not found</h1>
      <p>Cant find the page you are looking for</p>
      <a href="/">Go back</a>`);
});

server.listen(5000);
