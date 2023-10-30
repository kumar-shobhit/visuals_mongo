const url = "https://pbivizedit.com/api/visuals";


const mongoose = require("mongoose");
mongoose.connect("mongodb://localhost:27017/yavda");

const visualSchema = new mongoose.Schema({
  src: String,
  description: String,
  name: String,
});


const dataModel = mongoose.model("visuals", visualSchema);

fetch(url)
  .then((response) => {
    return response.json();
  })
  .then((data) => {
    data.items.forEach((item) => {

        const newData = {
        src: item.imagePath,
        description: item.description,
        name: item.name
      };

      dataModel.create(newData)
      .then((data) => {
        console.log("Data saved to MongoDB: " + data);
      })
      .catch((err) => {
        console.error("Error saving data to MongoDB: " + err);
      });
    

    });
  })
  .catch(error=>console.error("error", error));


  