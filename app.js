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
const smart = new Water({
  name: "Smart",
  rating: 8,
  review: "A really tasty water",
});

smart.save();

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

//saves a new taster to collection
const taster = new Taster({
  name: "Mike",
  age: 23,
  favoriteWater: smart,
});

taster.save();

//finds the collection of waters
// Water.find(function (err, waters) {
//   if (err) {
//     console.log(err);
//   } else {
//     mongoose.connection.close();

//     waters.forEach(function (water) {
//       console.log(water.name);
//     });
//   }
// });

//updates one document of data
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

//deletes one document of data
// Water.deleteOne({ _id: "5f8b16e2eb32fa2484d6c09c" }, function (err) {
//   if (err) {
//     console.log(err);
//   } else {
//     console.log("Successfully deleted document");
//   }
// });

//deletes many documents of data
// Water.deleteMany({ name: "Evian" }, function (err) {
//   if (err) {
//     console.log(err);
//   } else {
//     console.log("Successfully deleted documents");
//   }
// });

// Taster.deleteMany({ name: "Joe" }, function (err) {
//   if (err) {
//     console.log(err);
//   } else {
//     console.log("Successfully deleted documents");
//   }
// });
