const path = require("path");
const express = require("express");
const hbs = require("hbs");
const fetchWeather = require("../utils/fetchWeahter");

const app = express();

const publicDirectoryPath = path.join(__dirname, "../public");
const viewsPath = path.join(__dirname, "../templates/views");
const partialsPath = path.join(__dirname, "../templates/partials");

app.set("view engine", "hbs");
app.set("views", viewsPath);
hbs.registerPartials(partialsPath);

app.use(express.static(publicDirectoryPath));

app.get("", (req, res) => {
  res.render("index", {
    title: "Welcome to our website",
    name: "Indresh",
  });
});

app.get("/help", (req, res) => {
  res.render("help", {
    title: "Here you will get help",
    name: "Indresn",
  });
});

app.get("/about", (req, res) => {
  res.render("about", {
    title: "Welcome to our about section",
    name: "Indresh",
  });
});

app.get("/weather", async (req, res) => {
  // if (!req.query.address) {
  //   res.send({
  //     error: "You have to provide an adress",
  //   });
  //   return;
  // }

  // try {
  //   const data = await fetchWeather(req.query.address);
  //   res.send({
  //     data: data.data,
  //   });
  // } catch (e) {
  //   res.send({
  //     error: e.error,
  //   });
  // }

  res.render("weather", {
    title: "Here you will get the weather data",
  });
});

// app.use("/help/*", (req, res) => {
//   res.send("No help article found for your query");
// });

app.use((req, res) => {
  res.render("no-route", {
    message: "No matching route found go back to homepage",
  });
});

app.listen(3000, () => {
  console.log("Server is up on port 3000");
});
