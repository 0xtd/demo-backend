const express = require('express');
const app = express();
const port = 5555;
const connectDB = require('./utils/db');
const bookRouter = require('./routes/book.routes');


// Middleware
app.use(express.json());
app.use(bookRouter);

app.get('/', (req, res) => {
    res.send('Server is up and running');
});

app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
    connectDB();
});