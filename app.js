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
// Reference to Collenctions
const blogposts = db.collection('blogposts');

// Get Blog Posts
const allBlogPosts = db
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

// Get single blog post
const documentToGet = 'sample-post';
const singleBlogPost = blogposts
  .doc(documentToGet)
  .get()
  .then(function (doc){
    if (doc.exists) {
      console.log("Document data:", doc.data());
    } else {
      // doc.data() will be undefined in this case
      console.log("No such document!");
    }
    })
    .catch(function(error) {
      console.log("Error getting document:", error);
    });

 
// Import Routes
const indexRoute = require('./routes/index.js');
const postsRoute = require('./routes/posts.js');
const createRoute = require('./routes/createArticle.js');
// Create Base Route
// Send JSON array as response
// app.get('/', (req, res) => 
//     res.send(blogpostsArray)
// );

// Create Different Routes
app.use('/', indexRoute);
app.use('/posts', postsRoute);
app.use('/create', createRoute);

// Set up route
app.listen(port, () =>
 console.log(`Example app listening at http://localhost:${port}`)
);