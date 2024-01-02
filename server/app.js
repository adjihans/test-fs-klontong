const express = require("express");
const cors = require("cors");
const router = require("./routers/index");

const app = express();
const port = 8080;

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cors());

app.use(router);

app.listen(port, () => console.log(`Listening at http://localhost:${port}`));

module.exports = app;
