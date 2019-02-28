"use strict";

const express = require("express");

const app = express();

const shoppingcart = require("./routes/cart.routes");

app.use(express.json());  
app.use(express.static("./public")); 
app.use("/", shoppingcart); 


app.listen(8080, () => {
    console.log("SERVER IS RUNNING, PORT 8080");            
});