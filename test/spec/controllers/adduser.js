'use strict';

describe('Controller: AdduserCtrl', function () {

  // load the controller's module
  beforeEach(module('demoApp'));

  var AdduserCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    AdduserCtrl = $controller('AdduserCtrl', {
      $scope: scope
      // place here mocked dependencies
    });
  }));

  it('should attach a list of awesomeThings to the scope', function () {
    expect(AdduserCtrl.awesomeThings.length).toBe(3);
  });
});
