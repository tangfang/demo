'use strict';

/**
 * @ngdoc overview
 * @name demoApp
 * @description
 * # demoApp
 *
 * Main module of the application.
 */
angular
  .module('demoApp', [
    'ngAnimate',
    'ngCookies',
    'ngResource',
    'ngRoute',
    'ngSanitize',
    'ngTouch',
    'ui.tree'
  ])
  .config(function ($routeProvider) {
    $routeProvider
      .when('/', {
        templateUrl: 'views/main.html',
        controller: 'MainCtrl',
        controllerAs: 'main'
      })
      .when('/about', {
        templateUrl: 'views/about.html',
        controller: 'AboutCtrl',
        controllerAs: 'about'
      })
      .when('/uiTreeDemo', {
        templateUrl: 'views/uitreedemo.html',
        controller: 'UitreedemoCtrl',
        controllerAs: 'uiTreeDemo'
      })
      .when('/csdpUiTree', {
        templateUrl: 'views/csdpuitreedemo.html',
        controller: 'CsdpuitreeCtrl',
        controllerAs: 'csdpUiTree'
      })
      .when('/websocket', {
        templateUrl: 'views/websocketdemo.html',
        controller: 'WebsocketdemoCtrl'
      })
      .when('/hello', {
        templateUrl: 'views/helloword.html',
        controller: 'HellowordCtrl'
      })
      .when('/crud', {
        templateUrl: 'views/cruddemo.html',
        controller: 'CruddemoCtrl'
      })
      .when('/addUser/:id', {
        templateUrl: 'views/adduser.html',
        controller: 'AdduserCtrl'
      })
      .when('/ckeditordemo', {
        templateUrl: 'views/ckeditordemo.html',
        controller: 'CkeditordemoCtrl',
        controllerAs: 'ckeditordemo'
      })
      .when('/ng-animatedemo', {
        templateUrl: 'views/ng-animatedemo.html',
        controller: 'NgAnimatedemoCtrl',
        controllerAs: 'ngAnimatedemo'
      })
      .otherwise({
        redirectTo: '/'
      });
  });
