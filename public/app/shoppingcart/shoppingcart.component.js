"use strict";
const cart = {
    templateUrl: "app/shoppingcart/shoppingcart.html",
    controller: ["CartService", function (CartService) {
        const vm = this;
        CartService.getCart().then(function(response) {
            console.log(response);
            vm.cartList = response.data;
        });                // returns us a promise, to handle promise use .then
                            // when it loads calls this component
           vm.addItem = function(item) {
            CartService.addItem(item).then(function(response) {
                vm.cartList = response.data;
            });
        }; 

        vm.deleteItem = function(id) {
            CartService.deleteItem(id).then(function(response) {
                vm.cartList = response.data;  
            });  
        };  
        
        vm.updateItem = function(cart, itemQuantity) {
            CartService.updateItem(cart, itemQuantity).then(function(response) {
                vm.cartList = response.data;
            });
        };
    }]
};



angular
    .module("App")
    .component("cart", cart);