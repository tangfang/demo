'use strict';

/**
 * @ngdoc function
 * @name demoApp.controller:DaterangepickerdemoCtrl
 * @description
 * # DaterangepickerdemoCtrl
 * Controller of the demoApp
 */
angular.module('demoApp')
  .controller('DaterangepickerdemoCtrl', function ($scope) {
    //时间区间
    $scope.daterange = '';
/*    $scope.startDate = moment().subtract(1, 'hours').format('YYYY-MM-DD HH:mm:ss');
    $scope.endDate = moment().format('YYYY-MM-DD HH:mm:ss');
    //设置可以选择的时间不能大过现在的时间
    $scope.maxDate = moment().format('YYYY-MM-DD HH:mm:ss');
    //设置最大的时间间隔为15天
    $scope.minDate = moment().subtract(15, 'days').format('YYYY-MM-DD HH:mm:ss');*/
    //自定义设置
    var init = function(){
      return {
        startDate: moment().subtract(1, 'hours').format('YYYY-MM-DD HH:mm:ss'),
        endDate: moment().format('YYYY-MM-DD HH:mm:ss'),
        maxDate: moment().format('YYYY-MM-DD HH:mm:ss'),
        minDate: moment().subtract(15, 'days').format('YYYY-MM-DD HH:mm:ss'),
        ranges:{
          '一小时': [moment().subtract(1, 'hours').format('YYYY-MM-DD HH:mm:ss'), moment().format('YYYY-MM-DD HH:mm:ss')],
          '六小时': [moment().subtract(6, 'hours').format('YYYY-MM-DD HH:mm:ss'), moment().format('YYYY-MM-DD HH:mm:ss')],
          '一天': [moment().subtract(1, 'days').format('YYYY-MM-DD HH:mm:ss'), moment().format('YYYY-MM-DD HH:mm:ss')],
          '七天': [moment().subtract(7, 'days').format('YYYY-MM-DD HH:mm:ss'), moment().format('YYYY-MM-DD HH:mm:ss')]
        }
      };
    };
    $scope.dateRangeOptions = init();

    $scope.changeDateRange = function(){
      console.log($scope.daterange);
    };
    $scope.reset = function(){
      $scope.dateRangeOptions = init();
    };
  });
