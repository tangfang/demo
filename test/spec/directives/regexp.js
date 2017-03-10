'use strict';

describe('Directive: regExp', function () {

  // load the directive's module
  beforeEach(module('demoApp'));

  var element,
    scope;

  beforeEach(inject(function ($rootScope) {
    scope = $rootScope.$new();
  }));

  it('should make hidden element visible', inject(function ($compile) {
    element = angular.element('<reg-exp></reg-exp>');
    element = $compile(element)(scope);
    expect(element.text()).toBe('this is the regExp directive');
  }));
});
