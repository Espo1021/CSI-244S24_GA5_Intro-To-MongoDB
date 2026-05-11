const { MongoClient } = require("mongodb");
      require("dotenv").config();
      //get the connection string from the .env file
      const CONNECTION_STRING = process.env.CONNECTION_STRING;
      // create a new MongoClient
      const client = new MongoClient(CONNECTION_STRING);
      // connect to the database
      try {
        client.connect();
        console.log("Connected to the database");
      } 
      catch (e) {
        console.error(e);
      }

    const db = client.db("sample_airbnb");
    const collection = db.collection("listingsAndReviews");

    // lets find all the listings that have a review score of 100
    const query = { "review_scores.review_scores_rating": 100 };
    const cursor = collection.find(query);
    // print the results
    cursor.forEach(
      function(doc) {
        console.log(doc.name);
      },
      function(err) {
        client.close();
      }
    );

    const query2 = { "review_scores.review_scores_rating": 100, "property_type": "House" };
    const cursor2 = collection.find(query2);
    // print the results
    cursor2.forEach(
      function(doc) {
        console.log(doc.name);
      },
      function(err) {
        client.close();
      }
    );

    const query3 = { "review_scores.review_scores_rating": 100, "address.market": "Sydney" };
    const cursor3 = collection.find(query3);
    cursor3.forEach(
        function(doc) {
            console.log(doc.listing_url);
        },
        function(err) {
            client.close();
        }
    );