'use strict';

describe('Controller: CsdpuitreeCtrl', function () {

  // load the controller's module
  beforeEach(module('demoApp'));

  var CsdpuitreeCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    CsdpuitreeCtrl = $controller('CsdpuitreeCtrl', {
      $scope: scope
      // place here mocked dependencies
    });
  }));

  it('should attach a list of awesomeThings to the scope', function () {
    expect(CsdpuitreeCtrl.awesomeThings.length).toBe(3);
  });
});
