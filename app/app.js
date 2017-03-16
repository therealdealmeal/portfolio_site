const app = angular.module('app', ['ngRoute']);

app.config(['$routeProvider', '$locationProvider', function($routeProvider, $locationProvider) {
  $locationProvider.html5Mode(true);

  $routeProvider
  .when('/', {
    templateUrl: '/public/views/home.html'
  })
  .when('/about', {
    templateUrl: '/public/views/rates.html'
  })
  .when('/education', {
    templateUrl: '/public/views/calendar.html'
  })
  .when('/technologies', {
    templateUrl: '/public/views/location.html'
  })
  .when('/portfolio', {
    templateUrl: '/public/views/owner_info.html'
  })
}]);

//  Put directives in here
