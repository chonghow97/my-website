const http = require("http");
const fs = require("fs");
const _ = require("lodash");

const server = http.createServer((req, res) => {
  // lodash: generate a random number between 0 and 20
  const num = _.random(0, 20);
  console.log(num);

  // lodash: greet function that can only be called once
  const greet = _.once(() => {
    console.log("hello");
  });

  greet();
  greet();

  // Set header content type
  res.setHeader("Content-Type", "text/html");

  let path = "./views/";
  switch (req.url) {
    case "/":
      path += "index.html";
      res.statusCode = 200;
      break;
    case "/about":
      path += "about.html";
      res.statusCode = 200;
      break;
    case "/about-us":
      res.statusCode = 301; // Set status to 301 for redirection
      res.setHeader("Location", "/about"); // Redirect to /about
      return res.end(); // End response after redirection
    default:
      path += "404.html";
      res.statusCode = 404;
  }

  // send an HTML file
  fs.readFile(path, (err, data) => {
    if (err) {
      console.log(err);
      res.statusCode = 500;
      res.end("<h1>Server Error</h1>");
    } else {
      res.end(data);
    }
  });
});

server.listen(3000, "localhost", () => {
  console.log("Listening for requests on port 3000");
});
