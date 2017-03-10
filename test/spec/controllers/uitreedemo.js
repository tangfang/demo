'use strict';

describe('Controller: UitreedemoCtrl', function () {

  // load the controller's module
  beforeEach(module('demoApp'));

  var UitreedemoCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    UitreedemoCtrl = $controller('UitreedemoCtrl', {
      $scope: scope
      // place here mocked dependencies
    });
  }));

  it('should attach a list of awesomeThings to the scope', function () {
    expect(UitreedemoCtrl.awesomeThings.length).toBe(3);
  });
});
