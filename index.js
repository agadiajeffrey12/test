const express = require("express");
const app = express();
const http = require("http");
const bp = require("body-parser");
const cors = require("cors");
const mongoose = require("mongoose");
const env = require("dotenv").config();
const authRoute = require("./routes/auth");
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

const server = http.createServer(app);
mongoose
  .connect(process.env.MONGO_URL, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => {
    console.log("conne");
  })
  .catch((err) => console.log(err));

app.use("/api/auth", authRoute);
server.listen(PORT, () => {
  console.log("working");
});
