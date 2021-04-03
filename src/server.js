import { join } from "path";
import express from "express";
import socketIO from "socket.io";

const PORT = 4000;
const app = express();
app.set("view engine", "pug");
app.use(express.static(join(__dirname, "static")));
app.set("views", join(__dirname, "views"));

app.get("/", (req, res) => res.render("home"));

const handleListening = () =>
  console.log(`✅ Server running: http://localhost:${PORT}`);

app.listen(PORT, handleListening);
