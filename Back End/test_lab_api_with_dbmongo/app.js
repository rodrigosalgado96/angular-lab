const express = require("express");
const mongoose = require("mongoose");
const app = express();
const bodyParser = require("body-parser");
const cors = require("cors");
require("dotenv/config");

app.use(bodyParser.json());
app.use(cors());

//import routes
const postsRoute = require("./routes/posts");

app.use("/posts", postsRoute);

//Routes
app.get("/", async (req, res) => {
  try {
    const connect = await res.send({status: "online"});
    // res.json(connect);
  } catch (err) {
    res.json({ message: err });
  }
});

//Connect to DB
mongoose.connect(
  process.env.DB_CONNECTION,
  { useNewUrlParser: true, useUnifiedTopology: true },
  () => console.log("Server running on port 3000")
);

//how start listening the server
app.listen(3000);
