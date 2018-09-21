const express = require('express');
const app = express();
const port = 3001;

app.use(express.static('data'));

app.get('/', (request, response) => {
response.send('Hello from Express!');
});

app.listen(port, (err) => {
    if (err) {
        return console.log('something bad happened', err)
    }
    console.log(`server is listening on ${port}`)
});