'use strict';

const util = require('gulp-util');
const through = require('through2');
const html2bemjson = require('./node_modules/html2bemjson');

module.exports = options => {
	// Какие-то действия с опциями. Например, проверка их существования,
	// задание значения по умолчанию и т.д.

	return through.obj(function(file, enc, cb) {
		// Если файл не существует
		if (file.isNull()) {
			cb(null, file);
			return;
		}

		// Если файл представлен потоком
		if (file.isStream()) {
			cb(new util.PluginError('html2bemjson', 'Streaming not supported'));
			return;
		}

		// Код плагина
		try {
			const data = file.contents.toString();

			file.contents = new Buffer(`module.exports = ${html2bemjson.stringify(data)};`);
			file.path = file.path.slice(0, -4);
			file.path += 'bemjson.js';

			// Возвращаем обработанный файл для следующего плагина
			this.push(file);
		} catch (err) {
			this.emit('error', new util.PluginError('gulp-example-plugin', err));
		}

		cb();
	});
};