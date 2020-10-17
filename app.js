const mongoose = require("mongoose");

//db connection
mongoose.connect("mongodb://localhost:27017/waterDB", {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

//schema for water collection
const waterSchema = new mongoose.Schema({
  name: {
    type: String,
    required: [true, "Water needs a name"],
  },
  rating: {
    type: Number,
    min: 1,
    max: 10,
  },
  review: String,
});

const Water = mongoose.model("Water", waterSchema);

// saves a new water to collection
const fiji = new Water({
  name: "Fiji",
  rating: 7,
  review: "It's an okay water",
});

fiji.save();

//schema for taster collection
const tasterSchema = new mongoose.Schema({
  name: {
    type: String,
    required: [true, "Taster needs a name"],
  },
  age: Number,
  favoriteWater: waterSchema,
});

const Taster = mongoose.model("Taster", tasterSchema);

//updates one document of data
Taster.updateOne({ name: "Joe" }, { favoriteWater: fiji }, function (err) {
  if (err) {
    console.log(err);
  } else {
    console.log("Successfully updated the document");
  }
});
