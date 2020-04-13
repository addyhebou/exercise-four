// Import Express
const express = require('express');
// Initiate Express to an App
const app = express();
// Set the port
const firebase = require("firebase");


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
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

// Import Routes
const indexRoute = require('./routes/index.js');
const postsRoute = require('./routes/posts.js');
const createRoute = require('./routes/createArticle.js');
// Create Base Route
// Create Different Routes
app.use('/', indexRoute);
app.use('/posts', postsRoute);
app.use('/create', createRoute);

// Set up route
app.listen(port, () =>
 console.log(`Example app listening at http://localhost:${port}`)
);