'use strict';

const fs = require('fs');
const assert = require('assert');
const util = require('gulp-util');
const m = require('./index');

it('default test', done => {
	const stream = m();

	stream.on('data', file => {
		const fixtures = fs.readFileSync('./dist/index.html', 'utf-8');

		assert.equal(file.contents.toString(), fixtures.replace(/\n/g, ''));
		done();
	});

	stream.write(new util.File({
		path: 'index.html',
		contents: fs.readFileSync('./index.html')
	}));

	stream.end();
});