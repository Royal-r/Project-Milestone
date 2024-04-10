const express = require('express');
const app = express();
const port = 3000;

app.use(express.urlencoded({ extended: true }));

app.get('/', (req, res) => {
    res.sendFile(__dirname + '/mycontactinfo.html');
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
