const express = require("express");
const cors = require("cors");
const config = require("./config.json");

const app = express();

app.listen(config.port, () => {
    console.log(`Server is running: http://${config.host}:${config.port}/`);
});