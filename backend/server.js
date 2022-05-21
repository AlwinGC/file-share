const express = require("express");
const mongoose = require("mongoose");

const app = express();
const PORT = 8080;

//Connect to the Mongo database
try {
    console.log(process.env.DB_URL)
    mongoose.connect(process.env.DB_URL, {
        useNewUrlParser: true,
        useUnifiedTopology: true,
    });
    var db = mongoose.connection;
    db.on("error", function (err) {
        console.log(err);
    });
    db.once("open", function (callback) {
        console.log("Connected to MongoDB");
    });
} catch (err) {
    console.log("Error : " + err);
}

app.use(function (req, res, next) {
    res.header('Access-Control-Allow-Origin', '*');
    res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept');
    next();
});

app.get("/", (req, res) => {
    res.send("Respose from This is from the backend");
});

app.listen(PORT, function () {
    console.log(`Listening on ${PORT}`);
});