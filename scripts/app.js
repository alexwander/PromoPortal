
var app = angular.module("portfolio", ['ngRoute']);
app.controller('MainCtrl', ['$scope', '$http', function ($scope, $http) {
    console.log('hi');

}]);
app.controller('BlogCtrl', ['$scope', '$http', function ($scope, $http) {
    console.log('hi blog');

}]);
