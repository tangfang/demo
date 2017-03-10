'use strict';

describe('Directive: csdpUiTree', function () {

  // load the directive's module
  beforeEach(module('demoApp'));

  var element,
    scope;

  beforeEach(inject(function ($rootScope) {
    scope = $rootScope.$new();
  }));

  it('should make hidden element visible', inject(function ($compile) {
    element = angular.element('<csdp-ui-tree></csdp-ui-tree>');
    element = $compile(element)(scope);
    expect(element.text()).toBe('this is the csdpUiTree directive');
  }));
});
