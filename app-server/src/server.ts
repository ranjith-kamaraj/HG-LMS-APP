const express = require("express");
const cors = require("cors");

const { Client } = require("pg");

const app = express();
require("dotenv").config();

const { getLogger } = require("./utils/logger");
const logger = getLogger();

/* Middlewares */
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

process.on("unhandledRejection", (err) => logger.error(err));

//@ts-ignore
global.lms = {
  logger,
};

app.listen(process.env.PORT, () => {
  console.info(`Server started on port: ${process.env.PORT}`);
});
