// Import Express
const express = require('express');
// Initiate Express to an App
const app = express();
// Set the port
const port = process.env.PORT || 4000;

const firebase = require("firebase/app")

const firebaseConfig = {
    apiKey: "AIzaSyCWXx0pNwcNZm6XAFLttmG2lNH3U8udWnY",
    authDomain: "exercise-four-7ef88.firebaseapp.com",
    databaseURL: "https://exercise-four-7ef88.firebaseio.com",
    projectId: "exercise-four-7ef88",
    storageBucket: "exercise-four-7ef88.appspot.com",
    messagingSenderId: "677328572353",
    appId: "1:677328572353:web:787ba66ac11f4a221b2940"
  };

const port = process.env.PORT || 4000;

// Create Base Route
app.get('/', (req, res) => 
    res.send('Exercise Four')

);

// Set up route
app.listen(port, () =>
 console.log(`Example app listening at http://localhost:${port}`)
 );