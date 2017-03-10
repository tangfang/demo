'use strict';

describe('Controller: CruddemoCtrl', function () {

  // load the controller's module
  beforeEach(module('demoApp'));

  var CruddemoCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    CruddemoCtrl = $controller('CruddemoCtrl', {
      $scope: scope
      // place here mocked dependencies
    });
  }));

  it('should attach a list of awesomeThings to the scope', function () {
    expect(CruddemoCtrl.awesomeThings.length).toBe(3);
  });
});
