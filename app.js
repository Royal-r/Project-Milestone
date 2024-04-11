// Here, I'm integrating the Express framework, creating an instance of the Express 
// implementation, and setting the server's port number to 3000 for the server to listen on
const express = require('express');
const app = express();
const port = 3000;

//// This piece of code allows the Express implementation to interpret URL-encoded data from incoming requests and access the provided form data.
app.use(express.urlencoded({ extended: true }));

//Here, I create a route handler for the root URL ("/") that transmits the "mycontactinfo.html" page in response to the client's request.
app.get('/', (req, res) => {
    res.sendFile(__dirname + '/mycontactinfo.html');
});

//Here, I'm establishing a route handler for the "/submit-form" URL that extracts the submitted form data (name, email, and 
//message) from the request body and returns a response to the client indicating that the form was successfully completed and submitted.
app.post('/submit-form', (req, res) => {
    const name = req.body.name;
    const email = req.body.email;
    const message = req.body.message;

    res.send('You have completed and successfully submitted the form!');
});

// This instructs the application to start listening on the local host port 3000. When the server starts running, a message 
//  indicating the URL where the server is accessible is logged to the terminal console.
app.listen(port, () => {
    console.log(`Server running on http://localhost:${port}`);
});


