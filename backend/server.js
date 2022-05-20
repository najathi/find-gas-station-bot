require('dotenv').config()
const express = require('express')
const bodyParser = require('body-parser')
const mongoose = require("mongoose")
const cors = require('cors')

const app = express()
app.use(bodyParser.json())

app.use(cors())

const placeRoutes = require("./routes/place");
const priceRoutes = require("./routes/price");

const MONGODB = process.env.MONGODB_URI;

// CORS
app.use((req, res, next) => {
    res.header("Access-Control-Allow-Origin", "*");
    res.header(
        "Access-Control-Allow-Methods",
        "OPTIONS, GET, POST, PUT, PATCH, DELETE"
    );
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept, Authorization");
    next();
});

app.use("/api", placeRoutes);
app.use("/api", priceRoutes);

// error handing middleware
app.use((error, req, res, next) => {
    console.log(error);
    const status = error.statusCode || 500;
    const message = error.message;
    const data = error.data;
    res.status(status).json({ message: message, data: data });
});

mongoose
    .connect(MONGODB, {
        useNewUrlParser: true,
        useUnifiedTopology: true
    })
    .then((result) => {
        app.listen(process.env.PORT || 3000, async () => {
            console.log(`🚀 app running on port ${process.env.PORT || 3000}`)
        });
    })
    .catch((err) => {
        console.log(err);
    });