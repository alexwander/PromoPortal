
var app = angular.module("portfolio", ['ngRoute']);

app.config(['$routeProvider', '$locationProvider', function($routeProvider, $locationProvider){



app.controller('MainCtrl', ['$scope', '$http', function ($scope, $http) {
    console.log('hi');

}]);
app.controller('BlogCtrl', ['$scope', '$http', function ($scope, $http) {
    console.log('hi blog');

}]);
app.controller('ContactCtrl', ['$scope', '$http', function ($scope, $http) {
    console.log('hi contact');

}]);