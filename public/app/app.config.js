"use strict";
angular
.module("App")
.config(["$routeProvider", function($routeProvider) {
    $routeProvider
    .when("/cart", {
        template: "<cart></cart>"
    });
}]);