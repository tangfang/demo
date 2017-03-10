'use strict';

describe('Controller: UeditordemoCtrl', function () {

  // load the controller's module
  beforeEach(module('demoApp'));

  var UeditordemoCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    UeditordemoCtrl = $controller('UeditordemoCtrl', {
      $scope: scope
      // place here mocked dependencies
    });
  }));

  it('should attach a list of awesomeThings to the scope', function () {
    expect(UeditordemoCtrl.awesomeThings.length).toBe(3);
  });
});
