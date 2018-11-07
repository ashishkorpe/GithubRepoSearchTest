var app = angular.module("myApp", ["ngRoute"]);
app.config(function($routeProvider){
    $routeProvider    
    .when('/details',{
        templateUrl:"details.html",
        controller:"detailsController"
    });
});
app.factory('myService',function(){
    var myService = {

    };
    return myService; 
});
