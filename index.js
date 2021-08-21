'use strict'

require('dotenv').config();
const express = require('express');
const mongoose = require('mongoose');
const PORT = process.env.PORT || 5000;

const ImageController = require('./controllers/ImageController');

const app = express();
app.use(express.json());

mongoose
    .connect(process.env.MONGO_URI, { useNewUrlParser: true, useUnifiedTopology: true })
    .then(function() {
        app.listen(PORT, () => console.log(`Server started on port ${PORT} ...`));
    })
    .catch(err => console.log(err));

app.get('/', ImageController.getAllImages);
app.post('/', ImageController.createImage);