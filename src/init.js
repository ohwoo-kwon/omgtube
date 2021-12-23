import "dotenv/config";
import "./db.js";
import "./models/Video.js";
import "./models/User.js";
import "./models/Comment.js";
import app from "./server.js";

const PORT = 4000;

const handelListening = () => {
  console.log(`Server listening on http://localhost:${PORT}`);
};

app.listen(PORT, handelListening);
