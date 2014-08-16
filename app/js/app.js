'use strict';


// Declare app level module which depends on filters, and services
angular.module('myApp', [
  'ngRoute',
  'myApp.filters',
  'myApp.services',
  'myApp.directives',
  'myApp.controllers',
]).
config(['$routeProvider', function($routeProvider) {
  $routeProvider.when('/view1', {templateUrl: 'partials/partial1.html', controller: 'MyCtrl1'});
  $routeProvider.when('/view2', {templateUrl: 'partials/partial2.html', controller: 'MyCtrl2'});
  $routeProvider.otherwise({redirectTo: '/view1'});
}]);

angular.module('F1FeederApp', [
  'F1FeederApp.services',
  'F1FeederApp.controllers',
  'ngRoute'
])
  .config(['$routeProvider', function($routeProvider) {
    $routeProvider
      .when('/drivers', {templateUrl: 'partials/drivers.html', controller: 'driversController'})
      .when('/drivers/:id', {templateUrl: 'partials/driver.html', controller: 'driversController'})
      .otherwise({redirectTo: '/drivers'});
  }]);

