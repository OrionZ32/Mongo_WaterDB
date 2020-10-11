const mongoose = require('mongoose');

mongoose.connect("mongodb://localhost:27017/waterDB", {useNewUrlParser: true, useUnifiedTopology: true});

const waterSchema = new mongoose.Schema ({
  name: String,
  rating: Number,
  review: String
});

const Water = mongoose.model("Water", waterSchema);

const life = new Water ({
  name: "Life",
  rating: 8,
  review: "Really good water"
});

const ozark = new Water ({
  name: "Ozark",
  rating: 6,
  review: "Decent water"
});

const core = new Water ({
  name: "Core",
  rating: 9,
  review: "The water is amazing"
});

Water.insertMany([life, ozark, core], function(err) {
  if (err) {
    console.log(err);
  } else {
    console.log("Saved all waters to waterDB");
  }
});