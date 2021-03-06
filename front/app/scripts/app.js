'use strict';

/**
 * @ngdoc overview
 * @name listacompraApp
 * @description
 * # listacompraApp
 *
 * Main module of the application.
 */
angular
  .module('listacompraApp', [
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
      .when('/about', {
        templateUrl: 'views/about.html',
        controller: 'AboutCtrl'
      })
      .when('/product',{
        templateUrl: 'views/product.html',
        controller:'productController'
      })

      .otherwise({
        redirectTo: '/'
      });
  });
