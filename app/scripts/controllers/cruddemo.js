'use strict';

/**
 * @ngdoc function
 * @name demoApp.controller:CruddemoCtrl
 * @description
 * # CruddemoCtrl
 * Controller of the demoApp
 */
angular.module('demoApp')
  .controller('CruddemoCtrl', function ($scope,$http,$location) {
    $scope.users = null;
    $http.get('json/users.json')
      .success(function(data){
        $scope.users = data;
      });

    //编辑用户跳转到表单页面
    $scope.update = function(user){
      // $location.href = '/#/addUser';
      $location.url('addUser/'+user.id);
    };

    //删除用户
    $scope.remove = function(user){
      console.log(user);
      /*$http({
        method: 'DELETE',
        url: 'api/v2/user'
        ......
      }).success(function(){
        //删除成功以后
        // 1.表格刷新
        // 2.从表格中删除user
      });*/
    };
  });
