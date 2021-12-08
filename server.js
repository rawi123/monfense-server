const express = require("express");
const cors = require("cors");
const bodyParser = require("body-parser");
const mongoose = require("mongoose");
const app = express();

require("dotenv").config();
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(cors());

app.use("/user", require('./routers/userRouter'));
app.use("/pokemon", require('./routers/pokemonRouter'));

mongoose.connect(`mongodb+srv://rawi:rawi123@cluster0.exbid.mongodb.net/monfensse?retryWrites=true&w=majority`, { useNewUrlParser: true, useUnifiedTopology: true })
    .then(data => {
        app.listen(process.env.PORT || 4000);
        console.log("connected to db port 4000");
    })
    .catch(err => console.log(err))


