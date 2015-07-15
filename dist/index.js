'use strict';

var spawn = require('child_process').spawn,
    Promise = Promise || require('q').Promise;

var args = require('./args');

function iptabler(options) {
  var iptable = {

    _args: [],

    _cmd: 'iptables',

    sudo: function sudo() {
      iptable._args.unshift(iptable._cmd);
      iptable._cmd = 'sudo';
      return iptable;
    },

    exec: function exec(callback) {
      return Promise(function (resolve, reject) {
        var cmd = spawn(iptable._cmd, iptable._args),
            stderr = '',
            stdout = '';

        cmd.stdout.on('data', function (data) {
          stdout += data;
        });

        cmd.stderr.on('data', function (data) {
          stderr += data;
        });

        cmd.on('close', function (code) {
          if (code !== 0) {
            reject(new Error(stderr));
            if (callback) return callback(new Error(stderr));
          }
          resolve(stdout);
          if (callback) return callback(null, stdout);
        });
      });
    }
  };

  args.forEach(function (arg) {
    arg.names.forEach(function (name) {
      iptable[name] = function (val) {
        iptable._args.push(arg.arg, val);
        return iptable;
      };
    });
  });

  for (var o in options) {
    iptable[o](options[o]);
  }

  return iptable;
}

module.exports = iptabler;