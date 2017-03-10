'use strict';

/**
 * @ngdoc directive
 * @name demoApp.directive:csdpUiTree
 * @description
 * # csdpUiTree
 */
angular.module('demoApp')
  .directive('csdpUiTree', function ($parse) {
    return {
      templateUrl: 'views/directives/csdpuitree.html',
      // require: ['ngModel'],
      restrict: 'AE',
      scope: true,
      link: function postLink(scope, element, attrs, ctrl) {
        scope.$watch(attrs.ngModel, function(){
          scope.nodes = scope.$parent[attrs.ngModel];
        });
        // scope.nodes = scope.$parent[attrs.ngModel];
        // console.log(scope)
        // console.log(attrs.ngModel)
        // var ngModel = ctrl[0];
        // if (ngModel) {
        //   ngModel.$render = function () {
        //     scope.$modelValue = ngModel.$modelValue;
        //   };
        // }
        angular.element('body').on('click', function(){
          console.log(angular.element('.csdp-ui-tree-node.dropdown'))
          angular.element('.csdp-ui-tree-node.dropdown').removeClass('open');
        });
        var options = scope.$eval(attrs.options);
        if(options!==undefined&&options.contextmenu!==undefined){
          // scope.contextmenu = options.contextmenu;
          scope.contextmenu = function(e){
            angular.element('.csdp-ui-tree-node.dropdown').removeClass('open');
            angular.element(e.currentTarget).parent().addClass('open');
          };
        }
        // scope.nodes = $parse(attrs.ngModel);
        // scope.nodes = scope.$eval(attrs.ngModel);
        scope.click = function(el){
          // console.log(angular.element('.csdp-ui-tree-node .dropdown'))
          angular.element('.csdp-ui-tree-node.dropdown>a').removeClass('active');
          angular.element(el.currentTarget).addClass('active');
        };
        scope.collapse = function(node){
          if(node.collapse){
            return;
          }
          if(options!==undefined&&options.collapse!==undefined){
            options.collapse(node);
          }
        };
      }
    };
  });
