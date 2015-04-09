var app = angular.module('plunker', ['ngRoute']);

app.config(['$routeProvider', '$locationProvider',
    function ($routeProvider, $locationProvider) {
        'use strict';

        $locationProvider.html5Mode(true);

        $routeProvider.
        when('/', {
            templateUrl: '/views/page1.html',
            controller: 'page1Ctrl'
        }).
        when('/page2', {
            templateUrl: '/views/page2.html',
            controller: 'page2Ctrl'
        }).
        otherwise({
            redirectTo: '/'
        });


  }]);

app.controller('MainCtrl', function ($scope) {
    $scope.name = 'World';
});

app.controller('page1Ctrl', function ($scope, $location) {
    console.log('browser location:', location.href);
    console.log('$location.url:', $location.url());
});

app.controller('page2Ctrl', function ($scope, $location) {
    console.log('browser location:', location.href);
    console.log('$location.url:', $location.url());
});