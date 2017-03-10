'use strict';

describe('Service: cloud', function () {

  // load the service's module
  beforeEach(module('demoApp'));

  // instantiate service
  var cloud;
  beforeEach(inject(function (_cloud_) {
    cloud = _cloud_;
  }));

  it('should do something', function () {
    expect(!!cloud).toBe(true);
  });

});
