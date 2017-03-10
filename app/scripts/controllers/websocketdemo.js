'use strict';

/**
 * @ngdoc function
 * @name demoApp.controller:WebsocketdemoCtrl
 * @description
 * # WebsocketdemoCtrl
 * Controller of the demoApp
 */
angular.module('demoApp')
  .controller('WebsocketdemoCtrl', function ($scope, $websocket) {
    $scope.isOpen = true;
    var demo = $websocket('ws://192.168.101.136:20000/WebSocketTest/websocket');
    $scope.messages = 'serverMessage';
    $scope.send = function(){
      demo.send('angulardemo');
    };
    demo.onOpen(function(){
      $scope.isOpen = false;
    });
    demo.onMessage(function(message){
      $scope.messages += '\n'+(message.data);
    });

  });
