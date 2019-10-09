const express = require("express");

const app = express();

const headerParserRouter = require("./api/headerParser");

app.use("/", headerParserRouter);

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => console.log(`App running on prot ${PORT}`));
