// Import Express
const express = require('express');
// Initiate Express to an App
const router = express.Router();
// Set the port
const firebase = require("firebase")

// Initialize firestore database
const db = firebase.firestore();
// Create empty Array
const blogpostsArray = [];
// Reference to Collenctions
const blogposts = db.collection('blogposts');
// Get Blog Posts

router.get("/", (req, res) =>{
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



router.get('/', (req, res) => {
    blogposts
        .doc(documentToGet)
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
        
    res.send("")
);

module.exports = router;