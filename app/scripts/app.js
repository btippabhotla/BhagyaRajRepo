'use strict';

/**
 * @ngdoc overview
 * @name bhagyarajCodingApp
 * @description
 * # bhagyarajCodingApp
 *
 * Main module of the application.
 */
angular
  .module('bhagyarajCodingApp', [
    'ngAnimate',
    'ngAria',
    'ngCookies',
    'ngMessages',
    'ngResource',
    'ngRoute',
    'ngSanitize',
    'ngTouch'
  ])
  .config(function ($routeProvider) {
    $routeProvider
      .when('/', {
        templateUrl: 'views/main.html',
        controller: 'MainCtrl'
      })
      .when('/', {
        templateUrl: 'views/about.html',
        controller: 'AboutCtrl'
      })
      .when('/retention', {
        templateUrl: 'views/retention.html',
        controller: 'retentionCtrl'
      })
      .otherwise({
        redirectTo: '/'
      });
     
  });
