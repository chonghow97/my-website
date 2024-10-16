const express = require("express");
const morgan = require("morgan");
const mongoose = require("mongoose");
const Blog = require("./models/blog");

// connect to mongodb
const dbURI = "mongodb+srv://xfer:1030@chongtuts.gezlv.mongodb.net/blogDB";
mongoose
  .connect(dbURI)
  .then(() => {
    console.log("Connected to MongoDB");
    // Listen for requests after successful connection
    app.listen(3000);
  })
  .catch((err) => console.log(err));

// express app
const app = express();

// register view engine
app.set("view engine", "ejs");

// middleware & static files
app.use(express.static("public"));
app.use(express.urlencoded({ extended: true }));
app.use(morgan("dev"));
// routes
app.get("/", (req, res) => {
  res.redirect("blogs");
});

// blog routes
app.get("/blogs", (req, res) => {
  Blog.find()
    .sort({ createdAt: -1 })
    .then((result) => {
      res.render("index", {
        title: "All Blogs",
        blogs: result,
      });
    })
    .catch((err) => {
      console.log(err);
    });
});

app.post("/blogs", (req, res) => {
  // console.log(req.body);
  const blog = new Blog(req.body);

  blog
    .save()
    .then((result) => {
      res.redirect("/blogs");
    })
    .catch((err) => {
      console.log(err);
    });
});

app.get("/about", (req, res) => {
  res.render("about", {
    title: "About",
  });
});

app.get("/blogs/create", (req, res) => {
  res.render("create", {
    title: "Create a new Blog",
  });
});

// 404 page
app.use((req, res) => {
  res.status(404).render("404", {
    title: "404",
  });
});
