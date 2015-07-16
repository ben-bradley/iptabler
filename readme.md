# iptabler [![Build Status](https://secure.travis-ci.org/ben-bradley/iptabler.png)](http://travis-ci.org/ben-bradley/iptabler)

Iptabler is a wrapper around `iptables`.  Peter Krumins wrote `node-iptables` about 4 years ago and I drew a lot of inspiration from how it works.

At it's core, `iptabler` is just a simplified & flexible way to construct and issue a command line.

## iptables Arguments

See the [iptables man page](http://manpages.ubuntu.com/manpages/raring/man8/iptables.8.html) to get a list of the possible arguments.

## API

### `iptabler([options])`

The `options` argument is an object which has property names that map to the chained method names which, in turn, map to command line arguments.  For hyphenated arguments, the method names and properties are camelCased so `--to-destination` becomes `toDestination`.

Property values are assigned in the same order that they appear in the `options`.

The full list of options is [here](http://manpages.ubuntu.com/manpages/raring/man8/iptables.8.html).

```javascript
// sudo iptables --append INPUT --source 192.168.1.100 --jump DROP

iptabler({
	sudo: true,
	append: 'INPUT',
	source: '192.168.1.100',
	jump: 'DROP'
}).exec((err, stdout) => {
	if (err)
		throw err;
	console.log('result: ', stdout);
});
```

If the `options` are omitted, then you must call the chained methods to build the command line arguments

```javascript
iptabler()
  .sudo()
  .append('INPUT')
  .source('192.168.1.100')
  .jump('DROP')
  .exec((err, stdout) => {
  	if (err)
  		throw err;
  	console.log('result: ', stdout);
  });
```

### `.exec([callback])`

The `.exec()` method is required to actually execute the command line built by either the `options` or the chained methods.  You can choose whether to send a callback along or to use the Promise that is returned so you can cleanly integrate it into your logic flow.
