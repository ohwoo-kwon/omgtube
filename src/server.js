import express from "express";

const PORT = 4000;

const app = express();

const handelListening = () => {
  console.log(`Server listening on http://localhost:${PORT}`);
};

app.listen(PORT, handelListening);
