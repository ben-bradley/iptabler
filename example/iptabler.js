'use strict';

var iptabler = require('../');

// iptabler()
// 	.sudo()
// 	.append('INPUT')
// 	.source('192.168.1.100')
// 	.jump('DROP')
// 	.exec()
// 	.then(function(result) {
// 		console.log('result: ', result);
// 		console.log(this);
// 	})
//	.catch(function(err) {
//		console.log(err.message);
//	});

// iptabler({
// 	sudo: true,
// 	append: 'INPUT',
// 	source: '192.168.1.100',
// 	jump: 'DROP'
// }).exec().then(function(result) {
// 	console.log('result:', result);
// }).catch(function(err) {
// 	console.log('ERROR:', err.message);
// });

iptabler({
	sudo: true,
	append: 'INPUT',
	source: '192.168.1.100',
	jump: 'DROP'
}).exec(function(err, result) {
	if (err)
		throw err;
	console.log('result: ', result);
});

// iptables -A INPUT -s 202.5.4.1 -j DROP
