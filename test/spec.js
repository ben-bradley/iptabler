var should = require('should'),
  config = require('config'),
  debug = require('debug')('test/spec'),
  iptabler = require('../');

debug('starting tests...');

describe('iptabler', function () {

  it('should pass', function () {
    debug('simple test');
    (1+1).should.eql(2);
  });

});
