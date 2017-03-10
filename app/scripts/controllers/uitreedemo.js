'use strict';

/**
 * @ngdoc function
 * @name demoApp.controller:UitreedemoCtrl
 * @description
 * # UitreedemoCtrl
 * Controller of the demoApp
 */
angular.module('demoApp')
  .controller('UitreedemoCtrl', function($scope) {
    $scope.data = [{
      'id': 1,
      'title': 'node1',
      'nodes': [{
        'id': 11,
        'title': 'node1.1',
        'nodes': [{
          'id': 111,
          'title': 'node1.1.1',
          'nodes': []
        }, {
          'id': 111,
          'title': 'node1.1.2',
          'nodes': []
        }]
      }, {
        'id': 12,
        'title': 'node1.2',
        'nodes': []
      }, {
        'id': 12,
        'title': 'node1.3',
        'nodes': []
      }]
    }, {
      'id': 2,
      'title': 'node2',
      'nodrop': true,
      'nodes': [{
        'id': 21,
        'title': 'node2.1',
        'nodes': []
      }, {
        'id': 22,
        'title': 'node2.2',
        'nodes': []
      }]
    }, {
      'id': 3,
      'title': 'node3',
      'nodes': []
    }];
  });