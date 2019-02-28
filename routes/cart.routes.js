"use strict";

const express = require("express");

const shoppingcart = express.Router();

const pool = require("./pg-connection-pool");

shoppingcart.get("/cart", function (req, res) {
    pool.query("select * from ShoppingCart").then(function (result) {
        res.send(result.rows);
    });
});

shoppingcart.post("/cart", function (req, res) {
    pool.query("insert into ShoppingCart (product, price, quantity) values ($1::text, $2::int, $3::int)", [req.body.product, req.body.price, req.body.quantity]).then(function () {
        pool.query("select * from ShoppingCart").then(function (result) {
            res.send(result.rows);
        });
    });
});

shoppingcart.put("/cart/:id", function(req, res) {
    pool.query("update ShoppingCart set quantity=$1::int where id = $2::int", [req.body.quantity, req.params.id]).then(function() {
        pool.query("select * from ShoppingCart").then(function (result) {
            res.send(result.rows);
        });
    });
});

// cshoppingcart.put("/change/:id", function(req, res) {
//     pool.query("update ShoppingCart set quantity = $1::int where id = $2::int", [req.body.quantity, req.params.id]).then (function() {
//         pool.query("select * from ShoppingCart").then(function(result) {
//             res.send(result.rows)
//         })
//     })
// })



shoppingcart.delete("/cart/:id", function (req, res) {
    pool.query("delete from ShoppingCart where id=$1::int", [req.params.id]
).then(function() {
    pool.query("select * from ShoppingCart").then(function (result) {
        res.send(result.rows);
    });
});
});

module.exports = shoppingcart;