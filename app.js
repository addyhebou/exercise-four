// Import Express
const express = require('express');
// Initiate Express to an App
const app = express();
// Set the port
const port = 4000;

// Create Base Route
app.get('/', (req, res) => res.send('Exercise Four'));

// Set up route
app.listen(port, () =>
 console.log(`Example app listening at http://localhost:${port}`)
 );