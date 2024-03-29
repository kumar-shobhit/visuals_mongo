const express = require("express");
const app = express();

const mongoose = require("mongoose");
mongoose.connect("mongodb://localhost:27017/yavda");

app.set("view engine","ejs");
app.use(express.static('./public'));

const visualSchema = new mongoose.Schema({
  src: String,
  description: String,
  name: String,
});

const VisualModel = mongoose.model("visuals", visualSchema);


app.get("/api/data", async (req, res) => {
  try {
    const data = await VisualModel.find({}, "");
    res.json(data);
  } catch (error) {
    console.error("Error fetching data: " + error);
  }
});

app.get("/", function (req, res) {
    res.render("index");
  });

app.listen(3000, () => {
  console.log('Server is running on port 3000');
});
