var should = require('should'),
  debug = require('debug')('test/spec'),
  iptabler = require('../');

debug('starting tests...');

describe('iptabler', function () {

  it('should build a command line with options', function () {
    var tmp = iptabler({
    	sudo: true,
    	append: 'INPUT',
    	source: '192.168.1.100',
    	jump: 'DROP'
    });

    assertIptabler(tmp);
  });

    it('should build a command line with chained methods', function () {
      var tmp = iptabler()
        .sudo()
        .append('INPUT')
        .source('192.168.1.100')
        .jump('DROP');

      assertIptabler(tmp);
    });

});

function assertIptabler(tmp) {
  (tmp._cmd).should.eql('sudo');
  (tmp._args).should.be.an.Array.with.length(7);
  (tmp._args[0]).should.eql('iptables');
  (tmp._args[1]).should.eql('-A');
  (tmp._args[2]).should.eql('INPUT');
  (tmp._args[3]).should.eql('-s');
  (tmp._args[4]).should.eql('192.168.1.100');
  (tmp._args[5]).should.eql('-j');
  (tmp._args[6]).should.eql('DROP');
}
