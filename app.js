const express = require("express");
const bodyParser = require("body-parser");

// Converting express into an app
const app = express();

app.use(express.json());
app.use(bodyParser.urlencoded({ extended: true }));

const PORT = process.env.PORT || 4000;

// Server listening for incoming requests
app.listen(PORT);
