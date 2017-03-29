'use strict';

/**
 * @ngdoc directive
 * @name demoApp.directive:dateRangePicker
 * @description
 * # dateRangePicker
 */
angular.module('demoApp')
  .constant('dateRangePickerConfig', {
    opens: 'left',
    timePicker: true,
    timePickerIncrement: 5,
    timePicker24Hour: true,
    timePickerSeconds: true,
    alwaysShowCalendars: true,
    autoApply: true,
    linkedCalendars: true,
    locale: {
      format: 'YYYY-MM-DD HH:mm:ss',
      daysOfWeek: ['周日', '周一', '周二', '周三', '周四', '周五','周六'],
      monthNames: ['一月', '二月', '三月', '四月', '五月', '六月', '七月', '八月', '九月', '十月', '十一月', '十二月'],
      firstDay: 1,
      applyLabel: '确认',
      cancelLabel: '取消',
      fromLabel: 'From',
      toLabel: 'To',
      customRangeLabel: '自定义时间区间'
    }
  })
  .directive('dateRangePicker', ['dateRangePickerConfig', function (dateRangePickerConfig) {
    return {
      restrict: 'A',
      scope: {
        // startDate: '=',
        // endDate: '=',
        // min: '=',
        // max: '=',
        // model: '=ngModel',
        options: '='
      },
      link: function postLink(scope, element) {
        var optionsDefault = {}, options;
        if(element.prop('tagName') !== 'INPUT') {
          console.error('Date Range Picker works only with input fields!');
          return;
        }
        // if(scope.min) {
        //   optionsDefault.minDate = scope.min;
        // }
        // if(scope.max) {
        //   optionsDefault.maxDate = scope.max;
        // }
        // if(scope.startDate) {
        //   optionsDefault.startDate = scope.startDate;
        // }
        // if(scope.endDate) {
        //   optionsDefault.endDate = scope.endDate;
        // }
        
        scope.$watch('options', function(newValue){
          options = angular.extend({}, optionsDefault, dateRangePickerConfig, newValue);
          console.log(options);
          element.daterangepicker(options);
        });
        // element.daterangepicker(options, function (start, end) {
        //   scope.$apply(function(){
        //     scope.startDate = start.format(options.locale.format);
        //     scope.endDate = end.format(options.locale.format);
        //   });
        // });
        // scope.$watch('startDate', function(newValue, oldValue){
        //   console.log(newValue + '-----' + oldValue);
        //   element.data('daterangepicker').setStartDate(newValue);
        // });
        // scope.$watch('endDate', function(newValue, oldValue){
        //   console.log(newValue + '-----' + oldValue);
        //   element.data('daterangepicker').setEndDate(newValue);
        // });
      }
    };
  }]);
