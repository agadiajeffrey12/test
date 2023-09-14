const express = require("express");
const app = express();
const http = require("http");
const bp = require("body-parser");
const cors = require("cors");
const PORT = process.env.PORT || 3001;

app.use(bp.json({ limit: "50mb" }));
app.use(express.json({ limit: "50mb" }));
app.use(bp.urlencoded({ limit: "50mb", extended: true }));
app.use(
  cors({
    origin: "http://localhost:3000",
    allowedHeaders: ["Origin", "X-Requested-With", "Content-Type", "Accept"],
    methods: ["GET", "POST", "DELETE", "UPDATE", "PUT", "PATCH"],
  })
);

app.get("/", function (req, res) {
  res.status(200).json({ name: "jo" });
});

const server = http.createServer(app);
server.listen(PORT, () => {
  console.log("connected");
});
