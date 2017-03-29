'use strict';

describe('Directive: dateRangePicker', function () {

  // load the directive's module
  beforeEach(module('demoApp'));

  var element,
    scope;

  beforeEach(inject(function ($rootScope) {
    scope = $rootScope.$new();
  }));

  it('should make hidden element visible', inject(function ($compile) {
    element = angular.element('<date-range-picker></date-range-picker>');
    element = $compile(element)(scope);
    expect(element.text()).toBe('this is the dateRangePicker directive');
  }));
});
