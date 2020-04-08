// Import Express
const express = require('express');
// Initiate Express to an App
const app = express();
// Set the port
const firebase = require("firebase")


const port = process.env.PORT || 4000;

const firebaseConfig = {
    apiKey: "AIzaSyCWXx0pNwcNZm6XAFLttmG2lNH3U8udWnY",
    authDomain: "exercise-four-7ef88.firebaseapp.com",
    databaseURL: "https://exercise-four-7ef88.firebaseio.com",
    projectId: "exercise-four-7ef88",
    storageBucket: "exercise-four-7ef88.appspot.com",
    messagingSenderId: "677328572353",
    appId: "1:677328572353:web:787ba66ac11f4a221b2940"
  };


firebase.initializeApp(firebaseConfig);

// Initialize firestore database
const db = firebase.firestore();

// Create empty ARray
const blogpostsArray = [];
// Get Blog Posts
const blogposts = db
  .collection('blogposts')
  .get()
  .then((querySnapshot) => {
    querySnapshot.forEach((doc) => {
      console.log(`${doc.id} => ${doc.data()}`);
      // Push document into array every time the query loops over existing articles
      blogpostsArray.push(doc.data());
    });
  })
  .catch(function(error){
    console.log('Errors: ', error);
  });

// Create Base Route
// Send JSON array as response
app.get('/', (req, res) => 
    res.send(blogpostsArray)
);

// Set up route
app.listen(port, () =>
 console.log(`Example app listening at http://localhost:${port}`)
);