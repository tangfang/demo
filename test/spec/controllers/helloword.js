'use strict';

describe('Controller: HellowordCtrl', function () {

  // load the controller's module
  beforeEach(module('demoApp'));

  var HellowordCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    HellowordCtrl = $controller('HellowordCtrl', {
      $scope: scope
      // place here mocked dependencies
    });
  }));

  it('should attach a list of awesomeThings to the scope', function () {
    expect(HellowordCtrl.awesomeThings.length).toBe(3);
  });
});
