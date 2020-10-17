const mongoose = require("mongoose");

mongoose.connect("mongodb://localhost:27017/waterDB", {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

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

// const water = new Water({
//   name: "Evian",
//   rating: 7,
//   review: "It's an good water",
// });

// water.save();

Water.find(function (err, waters) {
  if (err) {
    console.log(err);
  } else {
    mongoose.connection.close();

    waters.forEach(function (water) {
      console.log(water.name);
    });
  }
});

// Water.updateOne(
//   { _id: "5f8b16e2eb32fa2484d6c09c" },
//   { name: "Nestle" },
//   function (err) {
//     if (err) {
//       console.log(err);
//     } else {
//       console.log("Successfully updated the document");
//     }
//   }
// );

Water.deleteOne({ _id: "5f8b16e2eb32fa2484d6c09c" }, function (err) {
  if (err) {
    console.log(err);
  } else {
    console.log("Successfully deleted document");
  }
});
