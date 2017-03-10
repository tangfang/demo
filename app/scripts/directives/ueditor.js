'use strict';

/**
 * @ngdoc directive
 * @name demoApp.directive:ueEditor
 * @description
 * # ueEditor
 */
angular.module('demoApp')
  .directive('uEditor', function () {
    return {
      restrict: 'A',
      require: '?ngModel',
      link: function postLink(scope, element, attrs, ngModel) {
        if( !ngModel ) {return;}
        var edit = UE.getEditor(element[0]);
      }
    };
  });
