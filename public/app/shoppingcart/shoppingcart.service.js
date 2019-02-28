"use strict"
function CartService($http) {
    const self = this;

    self.getCart = function () {
        return $http({
            method: "GET",
            url: "/cart"
        });                             // how to make http requests in this service, this is an angular service
    };

    self.addItem = function (item) {
        return $http({
            method: "POST",
            url: "/cart",
            data: item, 
        });
    };
    self.deleteItem = function (id) {
        return $http({
            method: "DELETE",
            url: `/cart/${id}`
        });
    };

    self.updateItem = function(cart, itemQuantity) {
        return $http({
            method: "PUT",
            url:  `/cart/${cart.id}`,
            data: {...cart, quantity: Number(itemQuantity)}
        });
    };
};




angular
    .module("App")
    .service("CartService", CartService);