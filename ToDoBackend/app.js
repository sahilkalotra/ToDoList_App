import express from "express";

import { ValidationError } from "express-validation";
import cors from "cors";

import router from "./routers.js";
import { configDotenv } from "dotenv";

const app = express();
configDotenv()

const corsOption = {
  origin: ["http://localhost:3001"],
  credentials: true,
  methods: ["GET", "POST", "PUT", "DELETE"],
};

app.use(cors(corsOption));
app.use((_req, res, next) => {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "*");
  next();
});

const port = process.env.PORT ;

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(router);

app.use(function (err, req, res, next) {
  if (err instanceof ValidationError) {
    return res.status(err.statusCode).json(err);
  }

  return res.status(500).json(err);
});

app.listen(port, () => {
  console.log(`App listening at http://localhost:${port}`);
});
