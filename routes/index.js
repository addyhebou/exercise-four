// Import Express
const express = require('express');
// Initiate Express to an App
const router = express.Router();
// Set the port
const firebase = require("firebase")

// Initialize firestore database
const db = firebase.firestore();
// Reference to Collenctions
const blogposts = db.collection('blogposts');
// Get Blog Posts

router.get("/", (req, res) =>{
    // Create empty Array
    const blogpostsArray = [];
    blogPosts
    .get()
    .then((querySnapshot) => {
        querySnapshot.forEach((doc) => {
        // Push document into array every time the query loops over existing articles
            blogpostsArray.push(doc.data());
        });
        return res.send(blogpostsArray);
    })
    .catch(function(error){
        console.log('Errors: ', error);
        return res.send(error);
    });
});




