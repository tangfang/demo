'use strict';

/**
 * @ngdoc function
 * @name demoApp.controller:CsdpuitreeCtrl
 * @description
 * # CsdpuitreeCtrl
 * Controller of the demoApp
 */
angular.module('demoApp')
  .controller('CsdpuitreeCtrl', function($scope, $http) {
    $scope.treeColumns = [{
      id: 'uuid',
      text: 'name',
      children: 'list'
    }];

    // $scope.nodes = [{
    //   uuid: '1001',
    //   name: '1001',
    //   icon: 'glyphicon glyphicon-folder-close',
    //   url:
    // }, {
    //   uuid: '1002',
    //   name: '1002',
    //   icon: 'glyphicon glyphicon-folder-close'
    // }];
    $http.get('json/tree/vregion.json')
      .success(function(vregions){
        $scope.nodess = [];
        angular.forEach(vregions, function(vregion){
          $scope.nodess.push({
            id: vregion.uuid,
            text: vregion.vregionName,
            title: vregion.description,
            level: 1,
            data: vregion,
            icon: 'icon-menu-managefield'
          });
        });
      });
    $scope.collapse = function(node){
      node.children = [];
      if(node.data.vregionName){
        $http.get('json/tree/region.json')
          .success(function(regions){
            angular.forEach(regions, function(region){
              if(region.vregionId === node.id){
                node.children.push({
                  id: region.uuid,
                  text: region.regionName,
                  data: region,
                  level: node.level+1,
                  icon: 'icon-menu-resourcenode'
                });
              }
            });
          });
      }else if(node.data.regionName){
        $http.get('json/tree/service.json')
          .success(function(services){
            angular.forEach(services, function(service){
              if(service.regionId === node.id){
                node.children.push({
                  id: service.uuid,
                  text: service.sName,
                  data: service,
                  level: node.level+1,
                  icon: 'icon-menu-resourceUse'
                });
              }
            });
          });
      }
    };
    var _new = {
      uuid: '1004',
      vregionName: '天津'
    };
    $scope.add = function(node){
      if(node.children===undefined){
        node.children = [];
      }
      node.children.push({
        id: _new.uuid,
        text: _new.vregionName,
        level: 1,
        data: _new,
        icon: 'icon-menu-managefield'
      });
    };
    $scope.options = {
      collapse: function(node){
        $scope.collapse(node);
      },
      contextmenu: {
        createVregion: {
          label: '创建区域',
          disabled: function(node){
            if(node.level === 3){
              return true;
            }
            return false;
          },
          action: function(node){
            $scope.add(node);
          }
        },
        createRegion: {
          label: '创建资源节点',
          disabled: function(node){
            if(node.level === 3){
              return false;
            }
            return true;
          },
          action: function(node){
            $scope.add(node);
          }
        },
        createService: {
          label: '创建资源服务',
          disabled: function(node){
            if(node.level === 3){
              return false;
            }
            return true;
          },
          action: function(node){
            $scope.add(node);
          }
        }
      }
    };

  });