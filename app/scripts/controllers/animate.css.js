'use strict';

/**
 * @ngdoc function
 * @name demoApp.controller:AnimateCssCtrl
 * @description
 * # AnimateCssCtrl
 * Controller of the demoApp
 */
angular.module('demoApp')
  .controller('AnimateCssCtrl', function ($scope, $timeout) {
    var list = [{
      uuid: '1001',
      resourceType: '云主机1',
      propertyDisplay: '云主机1',
      subOrder_Properties: [{
        sequence: 1,
        isshow: '1',
        propertyValue: '1',
        propertyName: 'CPU'
      }]
    },{
      uuid: '1002',
      resourceType: '云主机2',
      propertyDisplay: '云主机2',
      subOrder_Properties: [{
        sequence: 2,
        isshow: '1',
        propertyValue: '1',
        propertyName: 'resource_pool'
      }]
    },{
      uuid: '1003',
      resourceType: '云主机3',
      propertyDisplay: '云主机3',
      subOrder_Properties: [{
        sequence: 2,
        isshow: '1',
        propertyValue: '1',
        propertyName: 'resource_pool'
      }]
    },{
      uuid: '1004',
      resourceType: '云主机4',
      propertyDisplay: '云主机4',
      subOrder_Properties: [{
        sequence: 2,
        isshow: '1',
        propertyValue: '1',
        propertyName: 'resource_pool'
      }]
    },{
      uuid: '1005',
      resourceType: '云主机5',
      propertyDisplay: '云主机5',
      subOrder_Properties: [{
        sequence: 2,
        isshow: '1',
        propertyValue: '1',
        propertyName: 'resource_pool'
      }]
    }];
    $scope.subOrders = [];
    angular.forEach(list, function(item, i){
      $timeout(function() {
        $scope.subOrders.push(item);
      }, 200 * i);
    });
  });
