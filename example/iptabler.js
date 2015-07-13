'use strict';

var iptabler = require('../');

var foo = iptabler()
	.sudo()
	.append('INPUT')
	.source('202.5.4.1')
	.jump('DROP')
	.exec(function(err, result) {
		console.log('Error:', err);
		console.log('result: ', result);
		console.log(this);
	});

// var foo = iptabler({
// 	append: 'FOO'
// })

console.log(foo);

// iptabler()
// 	.append('INPUT')
// 	.source('202.5.4.1')
// 	.jump('DROP')
// 	.exec();

// iptabler({
// 	append: 'INPUT',
// 	source: '202.5.4.1',
// 	jump: 'DROP'
// })


// iptables -A INPUT -s 202.5.4.1 -j DROP
