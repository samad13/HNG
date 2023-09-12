const express = require('express');
const mongoose = require('mongoose');
const app = express();
const profileRoutes = require('./routes/profileRoutes')
const errorHandler = require('./middlware/errorHandler')
const morgan = require('morgan')
const cors = require('cors')
require("dotenv/config");

const headSetter = (req, res, next) => {
    res.setHeader('Content-Type', 'application/json')
    res.setHeader('Access-Control-Allow-Origin', '*')

    next()
}

app.use(headSetter)
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Database
mongoose.set('strictQuery', false);
mongoose
    .connect(process.env.MONGO_URI, {
        useNewUrlParser: true,
        useUnifiedTopology: true,
    })
    .then(() => {
        console.log('database connected!');
    })
    .catch((err) => {
        console.log(err);
    });



app.get('/', (req, res) => {
    res.send('API is running in  /api');
});

app.use('/api', profileRoutes)
app.use(cors());
app.use(morgan('dev'));
app.use(errorHandler);

const port = process.env.PORT || 3000

app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});
