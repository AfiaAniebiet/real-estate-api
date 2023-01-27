const express = require("express");
const bodyParser = require("body-parser");

// Converting express into an app
const app = express();

app.use(express.json());
app.use(bodyParser.urlencoded({ extended: true }));

// Setting up the ejs view engine
app.set("view engine", "view");
app.set("views", "views");

const PORT = process.env.PORT || 4000;

// Server listening for incoming requests
app.listen(PORT);
