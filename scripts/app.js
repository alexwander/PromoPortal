var app = angular.module("portfolio", ['ngRoute']);

app.config(['$routeProvider', '$locationProvider', function($routeProvider, $locationProvider){
    $routeProvider
    .when('/main', {
        templateUrl: 'main.html',
        controller: 'MainCtrl'
    })
    .when('/about', {
        templateUrl: 'about.html',
        controller: 'MainCtrl'
    })
    .when('/blog', {
        templateUrl: 'blog.html',
        controller: 'BlogCtrl'
    })
    .when('/ourwork', {
        templateUrl: 'ourwork.html',
        controller: 'MainCtrl'
    })
    .when('/contact', {
        templateUrl: 'contact.html',
        controller: 'ContactCtrl'
    })
    .otherwise({redirectTo:'/main'});

    $locationProvider.html5Mode(true);
}]);
    app.controller('MainCtrl', ['$scope', '$http', function ($scope, $http) {
        console.log('hi');

    }]);
     app.controller('BlogCtrl', ['$scope', '$http', function ($scope, $http) {
        console.log('hi blog');

    }]);
      app.controller('ContactCtrl', ['$scope', '$http', function ($scope, $http) {
        console.log('hi contact');

    }]);
    