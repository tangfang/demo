'use strict';

describe('Controller: NgAnimatedemoCtrl', function () {

  // load the controller's module
  beforeEach(module('demoApp'));

  var NgAnimatedemoCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    NgAnimatedemoCtrl = $controller('NgAnimatedemoCtrl', {
      $scope: scope
      // place here mocked dependencies
    });
  }));

  it('should attach a list of awesomeThings to the scope', function () {
    expect(NgAnimatedemoCtrl.awesomeThings.length).toBe(3);
  });
});
