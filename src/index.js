'use strict';

let spawn = require('child_process').spawn;

let args = [
  // Commands
{
  names: ['append', 'A'],
  arg: '-A'
}, {
  names: ['check', 'chk', 'C'],
  arg: '-C'
}, {
  names: ['delete', 'del', 'D'],
  arg: '-D'
}, {
  names: ['insert', 'ins', 'I'],
  arg: '-I'
}, {
  names: ['replace', 'R'],
  arg: '-R'
}, {
  names: ['list', 'L'],
  arg: '-L'
}, {
  names: ['list_rules', 'rules', 'S'],
  arg: '-S'
}, {
  names: ['flush', 'F'],
  arg: '-F'
}, {
  names: ['zero', 'Z'],
  arg: '-Z'
}, {
  names: ['new_chain', 'N'],
  arg: '-N'
}, {
  names: ['delete_chain', 'X'],
  arg: '-X'
}, {
  names: ['policy', 'pol', 'P'],
  arg: '-P'
}, {
  names: ['rename_chain', 'rename', 'E'],
  arg: '-E'
},
  // Parameters
{
  names: ['ipv4', 'v4'],
  arg: 'ipv4'
}, {
  names: ['ipv6', 'v6'],
  arg: 'ipv6'
}, {
  names: ['protocol', 'proto', 'prot', 'p'],
  arg: '-p'
}, {
  names: ['source', 'src', 's'],
  arg: '-s'
}, {
  names: ['destination', 'dest', 'dst', 'd'],
  arg: '-d'
}, {
  names: ['match', 'm'],
  arg: '-m'
}, {
  names: ['jump', 'j'],
  arg: '-j'
}, {
  names: ['goto', 'g'],
  arg: '-g'
}, {
  names: ['in_interface', 'in', 'i'],
  arg: '-i'
}, {
  names: ['out_interface', 'out', 'o'],
  arg: '-o'
}, {
  names: ['fragment', 'frag', 'f'],
  arg: '-f'
}, {
  names: ['set_counters', 'counters', 'c'],
  arg: '-c'
}];

function iptabler(options) {
  let iptable = {

    _args: [],

    _cmd: 'iptables',

    sudo() {
      iptable._cmd = 'sudo';
      iptable._args.unshift('iptables');
      return iptable;
    },

    exec(callback) {
      let cmd = spawn(iptable._cmd, iptable._args),
        stderr = '',
        stdout = '';

      cmd.stdout.on('data', (data) => {
        stdout += data;
      });

      cmd.stderr.on('data', (data) => {
        stderr += data;
      });

      cmd.on('close', (code) => {
        if (code !== 0)
          return callback(new Error(stderr));
        return callback(null, stdout);
      });
    }
  };

  args.forEach((arg) => {
    arg.names.forEach((name) => {
      iptable[name] = (val) => {
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
