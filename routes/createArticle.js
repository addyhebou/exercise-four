const express = require('express');
const router = express.Router();

// Include Firebase
const firebase = require("firebase");
// Initialize firestore database
const db = firebase.firestore();
// Reference to Collenctions
const blogposts = db.collection('blogposts');

const form = `
<form action = "/create/submit">
    <input type = "text" name = "title" placeholder = "Title"/>
    <input type = "text" name = "text" placeholder = "Text"/>
    <input type = "text" name = "author" placeholder = "Author"/>
    <button type = "submit">Submit</button>
</form>
`;

// Address: /create
router.get('/', (req, res) => res.send(form));

// Address: /create/submit
router.get('/submit', (req, res) => {
    const queryParams = req.query;
    blogposts.doc()
    .set(queryParams)
    .then(function(doc){
        res.send("<h1>Submission Successful</h1><a href = '/create'>Create another post</a>");
    })
    .catch(function(error){
        console.log("Error", error);
        res.send(`Error Submitting: ${error.toString()}`);
    })
});

module.exports = router;