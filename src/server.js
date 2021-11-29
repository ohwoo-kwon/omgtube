import express from "express";
import morgan from "morgan";

const PORT = 4000;

const app = express();
const logger = morgan("dev");

const handleHome = (req, res, next) => {
  return res.end();
};

app.use(logger);
app.get("/", logger, handleHome);

const handelListening = () => {
  console.log(`Server listening on http://localhost:${PORT}`);
};

app.listen(PORT, handelListening);
