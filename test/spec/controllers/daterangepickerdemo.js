'use strict';

describe('Controller: DaterangepickerdemoCtrl', function () {

  // load the controller's module
  beforeEach(module('demoApp'));

  var DaterangepickerdemoCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    DaterangepickerdemoCtrl = $controller('DaterangepickerdemoCtrl', {
      $scope: scope
      // place here mocked dependencies
    });
  }));

  it('should attach a list of awesomeThings to the scope', function () {
    expect(DaterangepickerdemoCtrl.awesomeThings.length).toBe(3);
  });
});
