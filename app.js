const express = require('express');
const bodyParser = require('body-parser'); // Add this line
const app = express();
const port = 3000;

app.use(bodyParser.urlencoded({ extended: true })); // Add this line

app.use(express.static('Public'));

app.get('/', (req, res) => {
    res.sendFile(__dirname + '/Public/mycontactinfo.html');
});

app.post('/submit-form', (req, res) => {
    const name = req.body.name;
    const email = req.body.email;
    const message = req.body.message;

    res.send('You have completed and successfully submitted the form!');
});

app.listen(port, () => {
    console.log(`Server running on http://localhost:${port}`);
});