const express = require('express');
const app = express();
const port = 5555;
const connectDB = require('./utils/db');

app.get('/', (req, res) => {
    res.send('Server is up and running');
});

app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
    connectDB();
});