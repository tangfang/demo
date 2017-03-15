'use strict';

/**
 * @ngdoc directive
 * @name demoApp.directive:regExp
 * @description
 * # regExp
 */
angular.module('demoApp')
  .directive('regExp', function ($RegExp) {
    /*<input reg-exp="name,length">*/
    return {
      require: 'ngModel',
      restrict: 'A',
      link: function postLink(scope, element, attrs, ctrl) {
        if (!ctrl) {return;}
        var _regExps = attrs.regExp.split(',');
        angular.forEach(_regExps, function(_regExp){
          // var regexp, patternExp = attr.ngPattern || attr.pattern;
          // attr.$observe('pattern', function(regex) {
          if($RegExp[_regExp].regExp instanceof RegExp){
            attrs.$observe($RegExp[_regExp].regExp, function(regex) {
              if (angular.isString(regex) && regex.length > 0) {
                regex = new RegExp('^' + regex + '$');
              }

              if (regex && !regex.test) {
                throw 'error';
              }

              $RegExp[_regExp].regExp = regex || undefined;
              ctrl.$validate();
            });
            // ctrl.$validators[_regExp] = function(modelValue, viewValue){
            //   return {
            //     $invalid: ctrl.$isEmpty(viewValue) || angular.isUndefined($RegExp[_regExp].regExp) || $RegExp[_regExp].regExp.test(viewValue),
            //     $errorMessage: $RegExp[_regExp].errorMesssage || ''
            //   };
            // };
            ctrl.$validators[_regExp] = {};
            ctrl.$validators[_regExp].$invalid = function(modelValue, viewValue){
              return ctrl.$isEmpty(viewValue) || angular.isUndefined($RegExp[_regExp].regExp) || $RegExp[_regExp].regExp.test(viewValue);
            };
            ctrl.$validators[_regExp].$errorMessage = function(){
              return $RegExp[_regExp].errorMessage;
            };
          }
          /*ctrl.$validators.pattern = function(modelValue, viewValue) {
            // HTML5 pattern constraint validates the input value, so we validate the viewValue
            return ctrl.$isEmpty(viewValue) || isUndefined(regexp) || regexp.test(viewValue);
          };*/
        });
        /*if(attrs.regExp){
          // attrs.$set('ngPattern', $RegExp[attrs.regExp]);
          // var _regExp = $RegExp[attrs.regExp];
          // console.log(_regExp);
          var _regExps = attrs.regExp.split(',');
          angular.forEach(_regExps, function(_regExp){
            if($RegExp[_regExp] instanceof RegExp){
              ctrl.$parsers.push(function(value){
                console.log(!$RegExp[_regExp].test(value))
                if(value){
                  ctrl.$setValidity(_regExp, $RegExp[_regExp].test(value));
                  return value;
                }
                // ctrl.$setValidity(_regExp, false);
                delete ctrl.$error[_regExp];
              });
            }else{
              attrs.$set('ng'+_regExp.replace(/(\w)/,function(v){return v.toUpperCase();}), $RegExp[_regExp]);
              ctrl.$setValidity(_regExp, $RegExp[_regExp]);
            }
          });
        }*/
      }
    };
  });
