var app = angular.module('starterApp', []);

app.config(function($routeProvider){
  $routeProvider
  .when('/', {
    templateUrl: 'app/index.html'
  })
  .when('/signup', {
    templateUrl: 'view/SignupView.html'
  })
  otherwise({
    redirectTo: '/'
  });
});
