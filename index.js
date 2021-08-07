'use strict'

require('dotenv').config();
const express = require('express');
const mongoose = require('mongoose');

const app = express();

const PORT = process.env.PORT || 5000;

mongoose
    .connect(process.env.MONGO_URI, { useNewUrlParser: true, useUnifiedTopology: true })
    .then(function() {
        app.listen(PORT, () => console.log(`Server started on port ${PORT} ...`));
    })
    .catch(err => console.log(err));