import express from "express";
import bodyParser from "body-parser";
import { authorRouter } from "./routes/authorRouter.js";

const app = express();
const PORT = 3000;

app.use(bodyParser.json());

app.use("/authors", authorRouter);

app.use((err, req, res, next) => {
  console.error(err);
  res.status(err.statusCode || 500).send(err.message);
});

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
