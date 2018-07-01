'use strict';

const util       = require('gulp-util');
const through    = require('through2');
const fs         = require('fs');
const path       = require('path');
const handlebars = require('./node_modules/handlebars');
const helpers    = require('./node_modules/handlebars-helpers')({
	handlebars: handlebars
});
const layouts    = require('./node_modules/handlebars-layouts');

const getFileList = (dir, fileList = []) => {
	fs.readdirSync(dir).forEach(file => {
		fileList = fs.statSync(path.join(dir, file)).isDirectory()
			? getFileList(path.join(dir, file), fileList)
			: fileList.concat(path.join(dir, file));
	});

	return fileList;
};

const getTemplates = () => {
	const hbsList = getFileList('./src/blocks/').filter(item => item.slice(-4) === '.hbs');

	return hbsList.map(item => {
		console.log({
			path: item,
			name: path.basename(item, '.hbs')
		});

		return {
			path: item,
			name: path.basename(item, '.hbs')
		}
	});
};

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
			cb(new util.PluginError('handlebars', 'Streaming not supported'));
			return;
		}

		// Код плагина
		try {
			const data = file.contents.toString();
			// Register helpers
			handlebars.registerHelper(layouts(handlebars));
			handlebars.registerHelper(helpers.attr());

			// Register partials
			getTemplates().forEach(item => {
				handlebars.registerPartial(item.name, fs.readFileSync(item.path, 'utf8'));
			});

			file.contents = new Buffer( handlebars.compile(data)() );

			file.path = file.path.slice(0, -4);
			file.path += '.html';

			// Возвращаем обработанный файл для следующего плагина
			this.push(file);
		} catch (err) {
			this.emit('error', new util.PluginError('gulp-example-plugin', err));
		}

		cb();
	});
};