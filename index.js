require("dotenv").config();
const express = require("express");

const mailRoute = require("./routes/mailRoute");

const app = express();
const port = process.env.PORT || 4000;

app.set("view engine", "ejs");

app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.get("/", (req, res) => {
  try {
    res.status(200).render("Home");
  } catch (error) {
    console.log(error);
    res.status(500).json({ message: "Internal server issue" });
  }
});

app.use("/", mailRoute);

app.listen(port, () => {
  console.log(`http://localhost:${port}`);
});
