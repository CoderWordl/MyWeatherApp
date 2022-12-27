const express = require("express");
const hbs = require("hbs");
const path = require("path");
const app = express();
const port = 3000;


// getting the public folder path
const folderPath = path.join(__dirname, "../public");
app.use(express.static(folderPath));

const viewsPath = path.join(__dirname, "../templates/views");
// console.log(viewsPath);
// console.log(folderPath);

// setting the view engine as hbs
app.set("view engine", "hbs");
// changing the name of views folder
app.set("views", viewsPath);

// pathof the partial folder
const partialPath = path.join(__dirname, "../templates/partials");
hbs.registerPartials(partialPath);



// routing of the application
app.get("/", (req, res) => {
    // res.send("Hello World");
    res.render('index');
});

app.get("/about", (req, res) => {
    // res.send("Hello World");
    res.render('about');
});

app.get("/weather", (req, res) => {
    res.render('weather');
});

app.get("*", (req, res) => {
    res.render('error');
});

app.listen(port, () => {
    console.log("Yes Man I am listening at the port No. 8000")
});