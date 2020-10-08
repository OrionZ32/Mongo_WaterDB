const MongoClient = require('mongodb').MongoClient;
const assert = require('assert');

// Connection URL
const url = 'mongodb://localhost:27017';

// Database Name
const dbName = 'waterDB';

// Create a new MongoClient
const client = new MongoClient(url, { useUnifiedTopology: true });

// Use connect method to connect to the Server
client.connect(function(err) {
  assert.equal(null, err);
  console.log("Connected successfully to server");

  const db = client.db(dbName);

  insertDocuments(db, function() {
      client.close();
  });
});

const insertDocuments = function(db, callback) {
  // Get the documents collection
  const collection = db.collection('waters');
  // Insert some documents
  collection.insertMany([
    {
      name: "Tap",
      rating: 4,
      review: "It's aight"
    },
    {
      name: "Nestle",
      score: 5,
      review: "It's aight"
    },
    {
      name: "Heb sparkling water",
      score: 8,
      review: "This water tastes like sprite"
    }
  ], function(err, result) {
    assert.equal(err, null);
    assert.equal(3, result.result.n);
    assert.equal(3, result.ops.length);
    console.log("Inserted 3 documents into the collection");
    callback(result);
  });
}