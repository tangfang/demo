'use strict';

/**
 * @ngdoc function
 * @name demoApp.controller:AdduserCtrl
 * @description
 * # AdduserCtrl
 * Controller of the demoApp
 */
angular.module('demoApp')
  .controller('AdduserCtrl', function ($scope, $http, $routeParams) {
    //声明一个用户对象
    if($routeParams.id === 0){
      $scope.user = {};  
    }else{
      $http.get('json/users.json')
        .success(function(data){
          angular.forEach(data, function(d){
            if(d.id === $routeParams.id){
              $scope.user = d;
            }
          });
        });
    }
    
    //使用$http.post向后台发送create请求
    $scope.btnSubmit = function(){
      console.info($scope.user);
    };
  });
