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
router.get("/", (req, res) =>  res.send("Please include an ID"));

router.get("/:id", (req, res) =>{ // :id allows you to get the id from the req's query
    const queryId = req.params.id;
    blogPosts
    .doc(queryId)
    .get()
    .then((function (doc) {
        if (doc.exists) {
            return res.send(doc.data());
        } else {
            return res.send("No such document:");
        }
    })
    .catch(function(error){
        console.log('Errors: ', error);
        return res.send(error);
    }));
});



